import React, { useState } from 'react';

const DisabledSelect = ({ answer, questionId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative m-5 ">
      <div
        className={`w-full p-3 border rounded cursor-pointer text-lg border-none ${
          isDropdownOpen ? 'bg-emerald-900 text-teal-300 rounded-t-2xl' : 'rounded-2xl bg-slate-100'
        }`}
        onClick={handleDropdownToggle}
      >
        <span className="block">{answer.question}</span>
        <svg
          className={`absolute top-2.5 right-2.5 h-6 pointer-events-none  transform ${isDropdownOpen ?'text-black rotate-180 bg-teal-300' :'text-white rotate-90 bg-gradient-to-t from-teal-900 to-teal-300'}`}
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
        <div className="top-full left-0 bg-white border border-gray-300 rounded-b-2xl p-4 w-full">
          <p>{answer.answer}</p>
        </div>
      )}
    </div>
  );
};

export default DisabledSelect;
