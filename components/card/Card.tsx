

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaps, setActiveOfficePoint, setOfficeCard } from '@/store/redusers/mapsSliceReduser';

const Card: React.FC = () => {
  const dispatch = useDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const { officeCard, activeOfficePointCoords } = useSelector(selectMaps);
  const [isVisible, setIsVisible] = useState(false);
  const handleClickOutside = (e: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
  
    
      dispatch(setOfficeCard(null));
    }
  };

  console.log(officeCard);
  const updateElementPosition = (top: number, left: number): void => {
    const cardElement = officeCard ? document.getElementById(officeCard?.id) : '';
    if (cardElement) {
      cardElement.style.top = `${top}px`;
      cardElement.style.left = `${left}px`;
    }
  };
  const handleMapsClick = (e: any) => {
    
    dispatch(setActiveOfficePoint(''));
    dispatch(setOfficeCard(null));
    e.stopPropagation();
  };
  const handleScroll = () => {
    const topCoordinate = window.scrollY + activeOfficePointCoords[0];
    const leftCoordinate = activeOfficePointCoords[1];
    updateElementPosition(topCoordinate, leftCoordinate);
  };
  useEffect(() => {
    if(officeCard==null){
    
      setIsVisible(false);
      
 
    }
   
    else setIsVisible(true);
  }, [officeCard]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeOfficePointCoords]);

  return (
    <div ref={cardRef}
      className={`fixed h-96  ${(isVisible)  ? 'opacity-95 top-[100%]' : 'opacity-0 top-[100%]'} z-[80] text-black w-screen max-w-[280px] -translate-x-full -ml-3 -translate-y-full -mt-3 transition-height duration-300 ease-in-out`}
      style={{ top: `${Math.round(activeOfficePointCoords[0])}px`, left: `${Math.round(activeOfficePointCoords[1])}px` }}
    > <div className={`relative lg:absolute w-full bg-primary-dark duration-[500ms] overflow-hidden ease-out lg:delay-[500ms]  transition-height  duration-500 ${isVisible ? 'h-96 top-[0%]' : 'h-0 top-[100%]'}`} >
        <div className={` p-global lg:absolute w-full left-0  p-8  overflow-hidden `}>
          <div className="absolute top-[5%] right-[5%] z-10 h-4 w-4 ">
            <button className="content-center icon-wrap" onClick={handleMapsClick}>
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 19L5 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
                <path d="M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
              </svg>
            </button>
          </div>
          <p className="text-left font-medium text-3xl pb-8">{officeCard?.title}</p>
          <div>
            <p className="text-left text-xl mb-4 font-medium">{officeCard?.adress1}</p>
            <p className="text-left text-xl mb-4 font-medium">{officeCard?.city}, {officeCard?.index}</p>
            <p className="text-left text-xl mb-12 font-medium"><span>{officeCard?.country}</span> </p>
          </div>
        </div>
      </div>
      <div className={`transition-opacity duration-200 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'} absolute h-[2px] bg-primary-dark z-10  right-0 bottom-0 w-full `}></div>
      <div className="absolute pointer-events-none overflow-hidden duration-[150ms] -right-[1.95rem] -bottom-[1.95rem] w-8 h-8 lg:delay-0">
        <div className="absolute w-14 h-[2px] bg-primary-dark  -translate-x-[50%] -translate-y-[50%] lg:rotate-[46deg]"></div>
      </div>
    </div>
  );
};

export default Card;