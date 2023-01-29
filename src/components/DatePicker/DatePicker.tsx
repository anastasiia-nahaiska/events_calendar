import React, { useCallback } from "react";

import './DatePicker.scss';

export const DatePicker: React.FC = () => {
  const hiddenDatePicker = React.useRef<HTMLInputElement>(null);

  const handleClick = useCallback((): void => {
    if (hiddenDatePicker.current) {
      hiddenDatePicker.current.showPicker();
    }
  }, []);

  return (
    <div className="date_picker">
      <div onClick={handleClick} className="date_picker__icon">
        <label>
          <input 
            type="date" 
            ref={hiddenDatePicker} 
            className="date_picker__input"
          />
        </label>
      </div>
    </div>
  );
};
