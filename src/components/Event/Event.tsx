import React, { useContext } from "react";
import cn from "classnames";
import moment from 'moment';

import { EventI } from "../../types/Event";

import './Event.scss';
import { useAppSelector } from "../../app/hooks";
import { EventFormContext } from "../../context/eventFormContext";

type Props = {
  event: EventI;
};

export const Event: React.FC<Props> = ({ event }) => {
  const { setIsOpenForm } = useContext(EventFormContext);
  const selectedDate = useAppSelector(state => state.selectedDate);
  const selectedMonth = moment(selectedDate).month();
  const eventMonth = moment(event.date).month();

  const open = () => {
    setIsOpenForm(status => !status);
    // eslint-disable-next-line no-console
    console.log('open');
  };

  return (
    <div 
      className={cn(
        "event",
        {"event--other_month": selectedMonth !== eventMonth}
      )}
      onClick={open}
    >
      <span className="event__time">{event?.time || '-'}</span>
      <p className="event__title">{event.title}</p>
    </div>
  );
};
