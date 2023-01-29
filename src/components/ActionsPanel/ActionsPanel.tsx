import React, { useContext } from 'react';
import { EventFormContext } from '../../context/eventFormContext';
import { DatePicker } from '../DatePicker';
import { EventForm } from '../EventForm';

import { SetMonth } from "../SetMonth";

import './ActionsPanel.scss';



export const ActionsPanel: React.FC = () => {
  const { isOpenForm, setIsOpenForm } = useContext(EventFormContext);
  
  return (
    <div className="actions_panel">
      <div className="actions_panel__form">
        <div 
          className="actions_panel__open_form" 
          onClick={() => setIsOpenForm(state => !state)}
        ></div>

        {isOpenForm && <EventForm />}
      </div>

      <div className="actions_panel__date">
        <SetMonth />
        <DatePicker />
      </div>
    </div>
  );
};
