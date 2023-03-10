import React, { useCallback, useContext } from 'react';
import cn from 'classnames';
import moment from 'moment';

import { EventI } from '../../types/Event';
import { EventFormContext } from '../../context/eventFormContext';
import { useDispatch } from 'react-redux';
import { actions as eventsActions } from '../../features/events';
import { selectedDateContext } from '../../context/selectedDateContext';

import './Event.scss';

type Props = {
  event: EventI;
};

export const Event: React.FC<Props> = ({ event }) => {
  const { setIsOpenForm } = useContext(EventFormContext);
  const { month } = useContext(selectedDateContext);
  const dispatch = useDispatch();

  const eventMonth = moment(event.date).month();

  const selectEvent = useCallback((selectedEvent: EventI) => (
    dispatch(eventsActions.setSelectedEvent(selectedEvent))
  ), []);

  const handleOpeningForm = useCallback(() => {
    setIsOpenForm(status => !status);
    selectEvent(event);
  }, [event]);
  
  return (
    <li>
      <button 
        className={cn(
          'event',
          { 'event--other_month': +month !== eventMonth }
        )}
        onClick={handleOpeningForm}
        style={{ backgroundColor: event.color }}
      >
        <span className="event__time">{event?.time}</span>
        <p className="event__title">{event.title}</p>
      </button>
    </li>
  );
};
