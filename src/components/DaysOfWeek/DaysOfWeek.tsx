import React from 'react';

import { daysOfWeek } from './constants';

import './DaysOfWeek.scss';

export const DaysOfWeek: React.FC = () => (
  <ul className="days_of_week">
    {daysOfWeek.map(({ day, id }) => (
      <li 
        className="days_of_week__day"
        key={id}
      >
        {day}
      </li> 
    ))}
  </ul>
);

