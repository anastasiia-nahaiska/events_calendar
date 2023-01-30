import React, { useContext, useState } from "react";
import moment from 'moment';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as eventsActions } from "../../features/events";
import { EventI } from "../../types/Event";

import './EventForm.scss';
import { EventFormContext } from "../../context/eventFormContext";
import { ColorPicker } from "../ColorPicker";
import { selectedDateContext } from "../../context/selectedDateContext";

export const EventForm: React.FC = () => {
  const { setIsOpenForm } = useContext(EventFormContext);
  const { month, year, day } = useContext(selectedDateContext);
  const { selectedEvent } = useAppSelector(state => state.events);
  const { events } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();

  const defaultTitle = selectedEvent ? selectedEvent.title : '';
  const defaultDescription = selectedEvent ? selectedEvent.description : '';
  const defaultTime  = selectedEvent ? selectedEvent.time : '';
  const defaultDate = selectedEvent 
    ? selectedEvent.date 
    : moment(new Date(+year, +month, +day)).format('YYYY-MM-DD');
  const defaultColor = selectedEvent ? selectedEvent.color : '#ffa751';

  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState(defaultTime);
  const [color, setColor] = useState(defaultColor);

  

  const addEvent = (event: EventI) => dispatch(eventsActions.add(event));

  const handleClosingForm = () => {
    setIsOpenForm(status => !status);
    dispatch(eventsActions.resetSelectedEvent());
  };

  const handleRemoveEvent = (id: number) => {
    dispatch(eventsActions.remove(id));
    handleClosingForm();
  };

  const handleChangingColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
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
      color,
      id: events.length + 1,
      createdAt: moment(new Date()).format('DD-MM-YYYY HH:mm:ss'),
      updatedAt: null,
    };

    const updateSomething = JSON.stringify({
      ...newEvent,
      id: selectedEvent?.id,
      createdAt: selectedEvent?.createdAt
    }) !== JSON.stringify(selectedEvent);


    if (selectedEvent && updateSomething) {
      addEvent({
        ...newEvent,
        id: selectedEvent.id,
        createdAt: selectedEvent.createdAt,
        updatedAt: moment(new Date()).format('DD-MM-YYYY HH:mm:ss'),
      });
      handleClosingForm();

      return;
    }

    if (selectedEvent && !updateSomething) {
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

        <button 
          className="event_form__close" 
          onClick={handleClosingForm}
        ></button>
      </h2>

      <div className="event_form__creating_info">

        {selectedEvent !== null 
          && !selectedEvent.updatedAt
          && `Created at ${selectedEvent.createdAt?.slice(0, -3)}`}
        
        {selectedEvent !== null 
          && selectedEvent.updatedAt
          && `Updated at ${selectedEvent.updatedAt?.slice(0, -3)}`}
      </div>

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

      <ColorPicker 
        color={color} 
        className="event_form__color_picker" 
        handleChangingColor={handleChangingColor}
      />

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
