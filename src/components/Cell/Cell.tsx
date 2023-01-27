import React from 'react';
import cn from 'classnames';

import './Cell.scss';

type Props = {
  day: number;
  isOtherMonth: boolean;
  isToday: boolean;
}

export const Cell: React.FC<Props> = ({ day, isOtherMonth, isToday }) => {
  return (
    <div 
      className={cn(
        "cell",
        {"cell--another_month": isOtherMonth},
        {"cell--today": isToday}
      )}
    >
      {day}
    </div>
  );
};
