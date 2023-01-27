import React, { useState } from "react";
import moment from 'moment';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as eventsActions } from "../../features/events";
import { EventI } from "../../types/Event";

import './EventForm.scss';

type Props = {
  onCloseFrom: () => void;
};

export const EventForm: React.FC<Props> = ({ onCloseFrom }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(moment(new Date()).format(("YYYY-MM-DD")));
  // const [time, setTime] = useState(new Date().getTime());
  const events = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();
  const addEvent = (event: EventI) => dispatch(eventsActions.add(event));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.length || !date.length) {
      return;
    }

    const newEvent: EventI = {
      title,
      description,
      date,
      id: events.length + 1
    };

    addEvent(newEvent);
    onCloseFrom();
  };

  return (
    <form action="" className="event_form" onSubmit={(e) => onSubmit(e)}>
      <p className="event_form__title">
        Add new event

        <div className="event_form__close" onClick={onCloseFrom}></div>
      </p>

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
