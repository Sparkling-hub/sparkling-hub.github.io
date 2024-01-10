import React, { useState, useEffect, useRef } from 'react';
import IDropList from '../../../interface/IDropList';
import Link from 'next/link';
import ButtonCircle from "../circle-button-black";

const DisabledSelect: React.FC<IDropList> = ({ name, DataLink }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <button className='no-underline p-4 relative' ref={dropdownRef} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
 
        <span className="block relative flex justify-between">
          {name}
          <ButtonCircle isDropdownOpen={isDropdownOpen} />
        </span>

      {isDropdownOpen && (

        <button
          className="absolute left-[-100%] px-16 top-[40%] py-[40%] before:border-t-0"

          onMouseEnter={handleMouseEnter}
        >



          <div className="left-4  bg-white p-2 border-solid w-auto rounded-lg drop-shadow-sm
          before:border-transparent
          border-gray-100
          border-[1px]
          drop-shadow-[0_3px_4px_rgba(0,0,0,0.23)]
           before:border-b-white before:border-r-[18px] 
        before:border-b-[18px]
         before:absolute
         before:left-[43%]
      
         before:border-l-[18px]
          before:drop-shadow-[0_-3px_3px_rgba(0,0,0,0.0.1)]
           before:top-[-15px]"
       
          >
            {DataLink.map((service, index) => (
              <Link key={service.id}  className="p-3 m-2 transform transition-transform hover:scale-110 " href={service.href}>
                {service.text}
                
              </Link>
            ))}
          </div>

        </button>
      )}
    </button>
  );
};

export default DisabledSelect;
