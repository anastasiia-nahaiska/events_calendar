import React, { useCallback, useContext } from 'react';
import moment from 'moment';
import { selectedDateContext } from '../../context/selectedDateContext';

import './DateCarousel.scss';

export const DateCarousel: React.FC = () => {
  const { 
    saveMonth,
    saveYear,
    month,
    year,
  } = useContext(selectedDateContext);

  const setNextMonth = useCallback((currMonth: number, currYear: number) => {
    if (currMonth === 11) {
      saveMonth(0);
      saveYear(currYear + 1);
    } else {
      saveMonth(currMonth + 1);
    }
  }, []);

  const setPrevMonth = useCallback((currMonth: number, currYear: number)  => {
    if (currMonth === 0) {
      saveMonth(11);
      saveYear(currYear - 1);
    } else {
      saveMonth(currMonth - 1);
    }
  }, []);

  return (
    <div className="date_carousel">
      <button 
        className="date_carousel__button" 
        onClick={() => setPrevMonth(+month, +year)}
      ></button>

      <p className="date_carousel__curr_month">
        {`${moment().month(month).format('MMMM')} ${year}`}
      </p>

      <button 
        className="date_carousel__button" 
        onClick={() => setNextMonth(+month, +year)}
      ></button>
    </div>
  );
};
