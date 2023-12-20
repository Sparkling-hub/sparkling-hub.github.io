import React, { useState } from 'react';
import ButtonCircle from "../circle-button";
import IQustion from '../../../interface/IQustion';

const DisabledSelect: React.FC<{ data: IQustion }> = ({ data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className={`w-full p-3 border rounded cursor-pointer text-lg border-none ${isDropdownOpen ? 'bg-emerald-900 text-teal-500 rounded-t-2xl'
            :
            'rounded-2xl bg-slate-100'
          }`}
        role='button'
        onClick={handleDropdownToggle}
        tabIndex={0}
        onKeyDown={handleDropdownToggle}
      >
        <span className="block relative flex justify-between ">
          {data.question}
          <ButtonCircle isDropdownOpen={isDropdownOpen} />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="top-full left-0 bg-white border border-gray-300 rounded-b-2xl p-4 w-full">
          <p>{data.answer}</p>
        </div>
      )}
    </>
  );
};

export default DisabledSelect;
