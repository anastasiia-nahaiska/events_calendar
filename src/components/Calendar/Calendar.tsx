import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { getVisibleDates } from '../../utils/getVisibleDates';
import { Cell } from '../Cell';
import { DaysOfWeek } from '../DaysOfWeek';

import './Calendar.scss';

export const Calendar: React.FC = () => {
  const selectedDate = useAppSelector(state => state.selectedDate)
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();
  const visibleDates = getVisibleDates(selectedMonth, selectedYear);
  console.log(selectedDate)
  console.log(visibleDates)
  return (
    <div className="calendar">
      <DaysOfWeek />

      {visibleDates.map(day => (
        <Cell 
          key={`${day.getDate()}` + `${day.getMonth()}`}
          day={day.getDate()} 
          isOtherMonth={selectedDate.getMonth() !== day.getMonth()}
        />
      ))}   
    </div>
  )
}