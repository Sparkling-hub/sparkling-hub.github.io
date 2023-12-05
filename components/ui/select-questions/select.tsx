import React, { useState } from 'react';
import ButtonCircle from "../circle-button";
import IQustion from '../../../interface/IQustion';
import type { FC } from 'react';

const DisabledSelect: FC<{ data: IQustion }> = ({ data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-full p-3 border rounded cursor-pointer text-lg border-none ${
          isDropdownOpen ? 'bg-emerald-900 text-teal-500 rounded-t-2xl' : 'rounded-2xl bg-slate-100'
        }`}
        role='dropdown'
        onClick={handleDropdownToggle}
        onKeyDown={handleDropdownToggle}
      >
        <span className="block relative flex justify-between ">{data.question}<ButtonCircle isDropdownOpen={isDropdownOpen} /> </span>
      </div>
      {isDropdownOpen && (
        <div className="top-full left-0 bg-white border border-gray-300 rounded-b-2xl p-4 w-full">
          <p>{data.answer}</p>
        </div>
      )}
    </>
  );
};

export default DisabledSelect;
