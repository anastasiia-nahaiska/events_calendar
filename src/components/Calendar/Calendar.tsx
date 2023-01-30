import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getVisibleDates } from '../../utils/getVisibleDates';
import { Cell } from '../Cell';
import { DaysOfWeek } from '../DaysOfWeek';
import { actions as eventsActions } from '../../features/events';
import { useStorage } from '../../hooks/useStorage';
import { EventI } from '../../types/Event';

import './Calendar.scss';
import moment from 'moment';
import { selectedDateContext } from '../../context/selectedDateContext';

export const Calendar: React.FC = () => {
  const { 
    month,
    year,
  } = useContext(selectedDateContext);

  const visibleDates = useMemo(() => (
    getVisibleDates(+month, +year)
  ), [month, year]);

  const [eventsInLS, setEventsInLS] = useStorage<EventI[]>([], 'events');

  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.events);

  const getEventsFromLocalStorage = useCallback((eventsFromLS: EventI[]) => (
    dispatch(eventsActions.setEvents(eventsFromLS))
  ), []);

  const getFilteredEvents = useCallback((
    targetDay: Date,
    allEvents: EventI[]
  ) => (
    allEvents.filter(event => (
      moment(targetDay).format().slice(0, 10) === event.date
    ))
  ), []);

  useEffect(() => {
    getEventsFromLocalStorage(eventsInLS);
  }, []);


  useEffect(() => {
    setEventsInLS(events);
  }, [events]);

  return (
    <div>
      <DaysOfWeek />

      <ul className="calendar">
        {visibleDates.map(date => (
          <Cell 
            key={`${date.getDate()}` + `${date.getMonth()}`}
            date={date} 
            isOtherMonth={+month !== date.getMonth()}
            events={getFilteredEvents(date, events)}
          />
        ))}
      </ul>
    </div>
  );
};
