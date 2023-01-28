import React, { useContext, useState } from "react";
import moment from 'moment';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as eventsActions } from "../../features/events";
import { EventI } from "../../types/Event";

import './EventForm.scss';
import { EventFormContext } from "../../context/eventFormContext";


export const EventForm: React.FC = () => {
  const { setIsOpenForm } = useContext(EventFormContext);
  const { selectedEvent } = useAppSelector(state => state.events);
  const { events } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();



  const defaultTitle = selectedEvent ? selectedEvent.title : '';
  const defaultDescription = selectedEvent ? selectedEvent.description : '';
  const defaultDate = selectedEvent 
    ? selectedEvent.date 
    : moment(new Date()).format(("YYYY-MM-DD"));

  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [date, setDate] = useState(defaultDate);
  // const [time, setTime] = useState(new Date().getTime());

  const addEvent = (event: EventI) => dispatch(eventsActions.add(event));
  // const resetSelectEvent = () => dispatch(eventsActions.resetSelectedEvent());


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.length || !date.length) {
      return;
    }

    const newEvent: EventI = {
      title,
      description,
      date,
      id: events.length + 1,
    };

    if (selectedEvent) {
      // eslint-disable-next-line no-console
      console.log(selectedEvent);
      addEvent({...newEvent, id: selectedEvent.id });
      dispatch(eventsActions.resetSelectedEvent());
      setIsOpenForm(status => !status);

      return;
    }





    addEvent(newEvent);
    setIsOpenForm(status => !status);
  };

  return (
    <form action="" className="event_form" onSubmit={(e) => onSubmit(e)}>
      <h2 className="event_form__title">
        Add new event

        <div 
          className="event_form__close" 
          onClick={() => setIsOpenForm(status => !status)}
        ></div>
      </h2>

      <label className="event_form__item" >
        Title
        <input 
          type="text" 
          className="event_form__input" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="event_form__item" >
        Description
        <textarea 
          className="event_form__input event_form__description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <div className="event_form__event_date">
        <label className="event_form__item" >
          Date
          <input 
            type="date" 
            className="event_form__input" 
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label className="event_form__item" >
          Time
          <input 
            type="time" 
            className="event_form__input"
          />
        </label>
      </div>

      <button className="event_form__submit" type="submit">Add</button>
    </form>
  );
};
