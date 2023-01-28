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
  const selectedDate = useAppSelector(state => state.selectedDate);
  const { events } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();



  const defaultTitle = selectedEvent ? selectedEvent.title : '';
  const defaultDescription = selectedEvent ? selectedEvent.description : '';
  const defaultDate = selectedEvent 
    ? selectedEvent.date 
    : moment(selectedDate).format(("YYYY-MM-DD"));

  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState('');

  // eslint-disable-next-line no-console
  console.log(time);

  const addEvent = (event: EventI) => dispatch(eventsActions.add(event));

  const handleClosingForm = () => {
    setIsOpenForm(status => !status);
    dispatch(eventsActions.resetSelectedEvent());
  };

  const handleRemoveEvent = (id: number) => {
    dispatch(eventsActions.remove(id));
    handleClosingForm();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.length || !date.length) {
      return;
    }

    const newEvent: EventI = {
      title,
      description,
      date,
      time,
      id: events.length + 1,
    };

    if (selectedEvent) {
      addEvent({...newEvent, id: selectedEvent.id });
      handleClosingForm();

      return;
    }

    addEvent(newEvent);
    setIsOpenForm(status => !status);
  };

  return (
    <form action="" className="event_form" onSubmit={(e) => onSubmit(e)}>
      <h2 className="event_form__title">
        {selectedEvent ? 'Update event' : 'Add new event'}

        <div 
          className="event_form__close" 
          onClick={handleClosingForm}
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
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>

      <div className="event_form__buttons">
        {selectedEvent && (
          <button 
            className="event_form__button event_form__delete" 
            type="button"
            onClick={() => handleRemoveEvent(selectedEvent.id)}
          ></button>
        )}

        <button className="event_form__button event_form__submit" type="submit">
          {selectedEvent ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};
