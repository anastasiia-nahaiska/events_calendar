import React from 'react';

import { daysOfWeek } from './constants';

import './DaysOfWeek.scss';

export const DaysOfWeek: React.FC = () =>  (
  <>
    {daysOfWeek.map(({ day, id }) => (
      <p 
        className={"dayOfWeek"}
        key={id}
      >
        {day}
      </p> 
    ))}
  </>
);

