import React, { useCallback, useContext } from 'react';
import { selectedDateContext } from '../../context/selectedDateContext';

import './DatePicker.scss';

export const DatePicker: React.FC = () => {
  const { 
    saveMonth,
    saveDay,
    saveYear,
  } = useContext(selectedDateContext);

  const hiddenDatePicker = React.useRef<HTMLInputElement>(null);

  const handleClick = useCallback((): void => {
    if (hiddenDatePicker.current) {
      hiddenDatePicker.current.showPicker();
    }
  }, []);

  const selectDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [year, month, day] = event.target.value.split('-');

    saveMonth(+month - 1);
    saveDay(+day);
    saveYear(+year);
  };

  return (
    <div className="date_picker">
      <button onClick={handleClick} className="date_picker__icon">
        <label>
          <input 
            type="date"
            ref={hiddenDatePicker} 
            className="date_picker__input"
            onChange={(e) => selectDate(e)}
          />
        </label>
      </button>
    </div>
  );
};
