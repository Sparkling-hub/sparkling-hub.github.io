import React, { useState } from 'react';
import ButtonCircle from "../circle-button";
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
        <span className="block relative">{answer.question}<ButtonCircle isDropdownOpen={isDropdownOpen}/> </span>
        
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
