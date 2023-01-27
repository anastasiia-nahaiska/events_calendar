import React, { useState } from 'react';
import { EventForm } from '../EventForm';

import { SetMonth } from "../SetMonth";

import './ActionsPanel.scss';



export const ActionsPanel: React.FC = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  
  const onFormClick = () => {
    setIsOpenForm(state => !state);
  };

  return (
    <div className="actions_panel">
      <div className="actions_panel__form">
        <div className="actions_panel__open_form" onClick={onFormClick}></div>
        {isOpenForm && <EventForm />}
      </div>

      <SetMonth />
      
    </div>
  );
};
