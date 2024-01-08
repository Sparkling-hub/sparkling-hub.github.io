import React, { useState, useEffect, useRef } from 'react';
import IDropList from '../../../interface/IDropList';
import Link from 'next/link';
import ButtonCircle from "../circle-button-black";


const DisabledSelect: React.FC<IDropList> = ({ name, DataLink }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the click event from propagating to the document click handler
    event.stopPropagation();
    // Toggle the dropdown
    handleDropdownToggle();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <li className='no-underline p-4 relative'>
      <button onClick={handleButtonClick}>
        <span className="block relative flex justify-between">
          {name}
          <ButtonCircle isDropdownOpen={isDropdownOpen} /> </span>
      </button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="left-4 bg-white border border-gray-300 p-2 absolute w-auto"
        >
          {DataLink.map((service, index) => (
            <Link key={service.id} className="no-underline" href={service.href}>
              {service.text}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default DisabledSelect;
