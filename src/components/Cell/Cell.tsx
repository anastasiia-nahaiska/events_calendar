/* eslint-disable no-console */
import React, { useContext } from 'react';
import cn from 'classnames';
import moment from 'moment';

import './Cell.scss';
import { EventI } from '../../types/Event';
import { Event } from '../Event';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as selectedDayActions } from '../../features/selectedDate';
import { EventFormContext } from '../../context/eventFormContext';

type Props = {
  date: Date;
  isOtherMonth: boolean;
  isToday: boolean;
  events: EventI[];
};

export const Cell: React.FC<Props> = ({ 
  date, 
  isOtherMonth, 
  isToday, 
  events 
}) => {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(state => state.selectedDate);
  const { setIsOpenForm } = useContext(EventFormContext);

  const setSelectedDate = (choosedDay: Date) => {
    dispatch(selectedDayActions.set(choosedDay));
  };

  const isSelected = moment(selectedDate).format("YYYY-MM-DD") 
    === moment(date).format("YYYY-MM-DD");

  return (
    <div 
      onClick={() => setSelectedDate(date)}
      onDoubleClick={() => setIsOpenForm(status => !status)}
      className={cn(
        "cell",
        {"cell--another_month": isOtherMonth},
        {"cell--today": isToday},
        {"cell--selected": isSelected}
      )}
    >
      <p className="cell__date">{date.getDate()}</p>

      {events.map(event => <Event key={event.id} event={event} />)}
    </div>
  );
};

