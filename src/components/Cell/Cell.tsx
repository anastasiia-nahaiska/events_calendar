/* eslint-disable no-console */
import React, { useContext } from 'react';
import cn from 'classnames';
import moment from 'moment';

import './Cell.scss';
import { EventI } from '../../types/Event';
import { Event } from '../Event';
import { EventFormContext } from '../../context/eventFormContext';
import { selectedDateContext } from '../../context/selectedDateContext';

type Props = {
  date: Date;
  isOtherMonth: boolean;
  events: EventI[];
};

export const Cell: React.FC<Props> = ({ 
  date, 
  isOtherMonth, 
  events 
}) => {
  const { 
    saveMonth,
    saveDay,
    saveYear,
    month,
    year,
    day,
  } = useContext(selectedDateContext);

  const { setIsOpenForm } = useContext(EventFormContext);

  const onClick = () => {
    saveMonth(date);
    saveDay(date);
    saveYear(date);
  };

  const isSelected = `${year}-${month}-${day}`
    === `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const isToday = moment(new Date()).format('YYYY-MM-DD') 
    === moment(date).format('YYYY-MM-DD');

  return (
    <li 
      onClick={onClick}
      onDoubleClick={() => setIsOpenForm(status => !status)}
      className={cn(
        "cell",
        {"cell--another_month": isOtherMonth},
        {"cell--today": isToday},
        {"cell--selected": isSelected}
      )}
    >
      <p className="cell__date">{date.getDate()}</p>

      <ul>
        {events.map(event => <Event key={event.id} event={event} />)}
      </ul>
    </li>
  );
};

