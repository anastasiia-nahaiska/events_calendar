import React, { useState } from 'react';
import { getVisibleDates } from '../../utils/getVisibleDates';
import { Cell } from '../Cell';
import { DaysOfWeek } from '../DaysOfWeek';

import './Calendar.scss';

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();
  const visibleDates = getVisibleDates(selectedMonth, selectedYear);

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