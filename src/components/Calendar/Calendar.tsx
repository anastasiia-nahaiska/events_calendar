import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { getVisibleDates } from '../../utils/getVisibleDates';
import { Cell } from '../Cell';
import { DaysOfWeek } from '../DaysOfWeek';

import './Calendar.scss';

export const Calendar: React.FC = () => {
  const selectedDate = useAppSelector(state => state.selectedDate);
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const visibleDates = getVisibleDates(selectedMonth, selectedYear);
  const now = new Date();
  const today = `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`;

  return (
    <div className="calendar">
      <DaysOfWeek />

      {visibleDates.map(day => (
        <Cell 
          key={`${day.getDate()}` + `${day.getMonth()}`}
          day={day.getDate()} 
          isOtherMonth={selectedDate.getMonth() !== day.getMonth()}
          isToday={today === `${day.getDate()} ${day.getMonth()} ${day.getFullYear()}`}
        />
      ))}   
    </div>
  );
};
