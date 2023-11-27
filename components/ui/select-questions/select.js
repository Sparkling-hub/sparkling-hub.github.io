import React, { useState } from 'react';

const DisabledSelect = ({answer}) => {
console.log(answer);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className={`w-full p-2 border rounded cursor-pointer ${
          isDropdownOpen ? 'border-green-500' : ''
        }`}
        onClick={handleDropdownToggle}
      >
        <span className="block">{answer.question}</span>
        <svg
          className={`absolute top-0 right-0 h-full w-8 p-2 pointer-events-none ${
            isDropdownOpen ? 'transform rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L10 7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0z"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <div className="top-full left-0 bg-white border border-green-500 rounded-3xl p-4 w-full m-5">
          {/* Здесь добавьте содержимое выпадающего списка */}
  <p>{answer.answer}</p>
        </div>
      )}
    </div>
  );
};

export default DisabledSelect;
