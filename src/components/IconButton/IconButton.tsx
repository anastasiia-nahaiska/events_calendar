import React from "react";

type Props = {
  onClick: () => void;
  size: number;
  icon: string;
  extaClassname?: string;
}

export const IconButton: React.FC <Props>= ({ 
  onClick,
  size,
  icon,
  extaClassname 
}) => (
  <button 
    className={`button ${extaClassname}`}
    type="button"
    onClick={onClick}
    style={{ 
      width: `${size}px`,
      height: `${size}px`,
      'backgroundImage': icon,
    }}
  ></button>
);
