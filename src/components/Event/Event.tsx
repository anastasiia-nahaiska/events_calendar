import React, { useContext } from "react";
import cn from "classnames";
import moment from 'moment';

import { EventI } from "../../types/Event";

import './Event.scss';
import { useAppSelector } from "../../app/hooks";
import { EventFormContext } from "../../context/eventFormContext";
import { useDispatch } from "react-redux";
import { actions as eventsActions } from "../../features/events";

type Props = {
  event: EventI;
};

export const Event: React.FC<Props> = ({ event }) => {
  const { setIsOpenForm } = useContext(EventFormContext);
  const selectedDate = useAppSelector(state => state.selectedDate);
  const dispatch = useDispatch();

  const selectedMonth = moment(selectedDate).month();
  const eventMonth = moment(event.date).month();

  const selectEvent = (selectedEvent: EventI) => (
    dispatch(eventsActions.setSelectedEvent(selectedEvent))
  );

  const handleOpeningForm = () => {
    setIsOpenForm(status => !status);
    selectEvent(event);
  };

  return (
    <div 
      className={cn(
        "event",
        {"event--other_month": selectedMonth !== eventMonth}
      )}
      onClick={handleOpeningForm}
    >
      <span className="event__time">{event?.time}</span>
      <p className="event__title">{event.title}</p>
    </div>
  );
};
