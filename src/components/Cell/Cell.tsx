import React from 'react';
import cn from 'classnames';

import './Cell.scss';
import { EventI } from '../../types/Event';
import { Event } from '../Event';

type Props = {
  day: number;
  isOtherMonth: boolean;
  isToday: boolean;
  events: EventI[];
};

export const Cell: React.FC<Props> = ({ 
  day, 
  isOtherMonth, 
  isToday, 
  events 
}) => {
  return (
    <div 
      className={cn(
        "cell",
        {"cell--another_month": isOtherMonth},
        {"cell--today": isToday}
      )}
    >
      <p className="cell__date">{day}</p>

      {events.map(event => <Event key={event.id} event={event} />)}
    </div>
  );
};
