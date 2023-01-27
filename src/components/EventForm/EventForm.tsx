import React from "react";

import './EventForm.scss';

export const EventForm: React.FC = () => {
  return (
    <form action="" className="event_form">
      <p className="event_form__title">
        Add new event

        <div className="event_form__close"></div>
      </p>

      <label className="event_form__item" >
        Title
        <input 
          type="text" 
          className="event_form__input" 
          required
        />
        </label>
        <label className="event_form__item" >
          Description
          <textarea 
            className="event_form__input event_form__description" 
          />
          </label>

        <div className="event_form__event_date">
          <label className="event_form__item" >
            Date
            <input 
              type="text" 
              className="event_form__input" 
              required
            />
          </label>

          <label className="event_form__item" >
            Time
            <input 
              type="time" 
              className="event_form__input" 
              placeholder="Title"
            />
          </label>
        </div>

        <button className="event_form__submit" type="submit">Add</button>
    </form>
  )
}