import React from 'react';

interface ButtonProps {
  place: string;
}

const Button: React.FC<ButtonProps> = ({ place }) => {
  return (
    <li title={""}>
      <button
        type="button"
        title="Remove item"
        aria-label="Remove item"
        aria-describedby=""
      >
        <span>×</span>
      </button>
      <span id={"select " + place}>
        {place}
      </span>
    </li>
  );
};

export default Button;
