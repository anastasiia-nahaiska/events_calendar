import React from 'react';

import './ColorPicker.scss';

type Props = {
  color: string;
  handleChangingColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
};

export const ColorPicker: React.FC<Props> = ({ 
  color, 
  handleChangingColor, 
  className 
}) => (
  <label className={`color_picker ${className}`} >
    Color
    <input 
      type="color" 
      value={color}
      className="color_picker__input"
      onChange={(e) => handleChangingColor(e)}
    />
  </label>

);
