import React from "react";
import cn from "classnames";
import moment from 'moment';

import { EventI } from "../../types/Event";

import './Event.scss';
import { useAppSelector } from "../../app/hooks";

type Props = {
  event: EventI;
};

export const Event: React.FC<Props> = ({ event }) => {
  const selectedDate = useAppSelector(state => state.selectedDate);
  const selectedMonth = moment(selectedDate).month();
  const eventMonth = moment(event.date).month();

  return (
    <div 
      className={cn(
        "event",
        {"event--other_month": selectedMonth !== eventMonth}
      )}
    >
      <span className="event__time">{event?.time || '-'}</span>
      <p className="event__title">{event.title}</p>
    </div>
  );
};
