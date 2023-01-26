import React from 'react';
import cn from 'classnames';

import { daysOfWeek } from './constants';

import './DaysOfWeek.scss';

export const DaysOfWeek: React.FC = () => {
  const today = new Date();

  return (
    <>
      {daysOfWeek.map(({ day, id }, i) => (
        <p 
          className={cn(
            "dayOfWeek",
            {"dayOfWeek--current": i === today.getDay()}
          )}
          key={id}
        >
          {day}
        </p> 
      ))}
    </>
  );
};
