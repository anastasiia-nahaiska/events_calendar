import React, { useContext } from 'react';
import { EventFormContext } from '../../context/eventFormContext';
import { DatePicker } from '../DatePicker';
import { EventForm } from '../EventForm';

import { DateCarousel } from '../DateCarousel';

import './ActionsPanel.scss';



export const ActionsPanel: React.FC = () => {
  const { isOpenForm, setIsOpenForm } = useContext(EventFormContext);
  
  return (
    <div className="actions_panel">
      <div className="actions_panel__form">
        <button 
          className="actions_panel__open_form" 
          onClick={() => setIsOpenForm(state => !state)}
        ></button>

        {isOpenForm && <EventForm />}
      </div>

      <DateCarousel />
      <DatePicker />

    </div>
  );
};
