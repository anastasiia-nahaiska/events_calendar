import React, { useContext } from 'react';
import moment from 'moment';
import { selectedDateContext } from '../../context/selectedDateContext';

import './SetMonth.scss';

export const SetMonth: React.FC = () => {
  const { 
    saveMonth,
    saveYear,
    month,
    year,
  } = useContext(selectedDateContext);

  const setNextMonth = (currMonth: number, currYear: number) => {
    if (currMonth === 11) {
      saveMonth(0);
      saveYear(currYear + 1);
    } else {
      saveMonth(currMonth + 1);
    }
  };

  const setPrevMonth = (currMonth: number, currYear: number)  => {
    if (currMonth === 0) {
      saveMonth(11);
      saveYear(currYear - 1);
    } else {
      saveMonth(currMonth - 1);
    }
  };

  return (
    <div className="set_month">
      <button 
        className="set_month__button" 
        onClick={() => setPrevMonth(+month, +year)}
      ></button>

      <p className="set_month__curr_month">
        {`${moment().month(month).format("MMMM")} ${year}`}
      </p>

      <button 
        className="set_month__button" 
        onClick={() => setNextMonth(+month, +year)}
      ></button>
    </div>
  );
};
