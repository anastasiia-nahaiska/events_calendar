import React from 'react';

import { SetMonth } from "../SetMonth";

import './ActionsPanel.scss';



export const ActionsPanel: React.FC = () => {

  return (
    <div className="actions_panel">
      <div className="actions_panel__open_form"></div>

      <SetMonth />
      
    </div>
  )
}