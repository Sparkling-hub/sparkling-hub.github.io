import React from 'react';

interface ButtonProps {
  place: string;
}

const Button: React.FC<ButtonProps> = ({ place }) => {
  return (
    <li className="" title={""}>
      <button
        type="button"
        className=""
        title="Remove item"
        aria-label="Remove item"
        aria-describedby=""
      >
        <span>×</span>
      </button>
      <span className="" id={"select " + place}>
        {place}
      </span>
    </li>
  );
};

export default Button;
