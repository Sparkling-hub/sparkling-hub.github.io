import React from 'react';

const DisabledSelect = () => {
  return (
    <div className="relative">
      <div
        className="w-full p-2 border rounded cursor-not-allowed"
        tabIndex="-1"
        aria-disabled="true"
      >
        <span className="block">Выберите опцию</span>
        <svg
          className="absolute top-0 right-0 h-full w-8 p-2 pointer-events-none"
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
    </div>
  );
};

export default DisabledSelect;
