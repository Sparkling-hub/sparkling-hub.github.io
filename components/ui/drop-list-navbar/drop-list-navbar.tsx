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

        <div
          className="absolute left-[-50%] my-5 before:border-t-0"

          onMouseEnter={handleMouseEnter}
        >



          <div className="left-4  bg-white p-2 border-solid w-auto rounded-lg drop-shadow-sm
          before:border-transparent
          drop-shadow-[0_3px_9px_rgba(0,0,0,0.2)]
           before:border-b-white before:border-r-[18px] 
        before:border-b-[18px]
         before:absolute
         before:left-[43%]
      
         before:border-l-[18px]
          before:drop-shadow-[0_-2px_1px_rgba(0,0,0,0.02)]
           before:top-[-15px]"
            onMouseEnter={handleMouseEnter}
          >
            {DataLink.map((service, index) => (
              <Link key={service.id}  className="p-3 m-2 transform transition-transform hover:scale-110 " href={service.href}>
                {service.text}
                
              </Link>
            ))}
          </div>

        </div>
      )}
    </button>
  );
};

export default DisabledSelect;
