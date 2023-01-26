import React from 'react';
import cn from 'classnames';

import './Cell.scss';

type Props = {
  day: number;
  isOtherMonth: boolean;
}

export const Cell: React.FC<Props> = ({ day, isOtherMonth }) => {
  return (
    <div 
      className={cn(
        "cell",
        {"cell--another_month": isOtherMonth}
      )}
    >
      {day}
    </div>
  );
};
