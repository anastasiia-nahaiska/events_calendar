import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getVisibleDates } from '../../utils/getVisibleDates';
import { Cell } from '../Cell';
import { DaysOfWeek } from '../DaysOfWeek';
import { actions as eventsActions } from '../../features/events';
import { useStorage } from '../../hooks/useStorage';
import { EventI } from '../../types/Event';

import './Calendar.scss';
import moment from 'moment';

export const Calendar: React.FC = () => {
  const selectedDate = useAppSelector(state => state.selectedDate);
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const visibleDates = getVisibleDates(selectedMonth, selectedYear);
  const now = new Date();
  const today = `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`;

  const [eventsInLS, setEventsInLS] = useStorage<EventI[]>([], 'events');
  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.events);

  const getEventsFromLocalStorage = (eventsFromLS: EventI[]) => (
    dispatch(eventsActions.setEvents(eventsFromLS))
  );

  useEffect(() => {
    getEventsFromLocalStorage(eventsInLS);
  }, []);


  useEffect(() => {
    setEventsInLS(events);
  }, [events]);

  const getFilteredEvents = (targetDay: Date, allEvents: EventI[]) => (
    allEvents.filter(event => (
      moment(targetDay).format().slice(0, 10) === event.date
    ))
  );

  return (
    <div className="calendar">
      <DaysOfWeek />

      {visibleDates.map(date => (
        <Cell 
          key={`${date.getDate()}` + `${date.getMonth()}`}
          date={date} 
          isOtherMonth={selectedDate.getMonth() !== date.getMonth()}
          isToday={today === `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}
          events={getFilteredEvents(date, events)}
        />
      ))}   
    </div>
  );
};
