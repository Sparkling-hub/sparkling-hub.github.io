

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaps, setHovered, setActiveOfficePoint, setActiveOfficePointCoords, setLastHovered } from '@/store/redusers/mapsSliceReduser';
import mapsData from "@/data/data-maps";
import { updateElementPosition } from '../helper/updateElementPosition';

const MapSelectionSettings: React.FC = () => {
	const dispatch = useDispatch();
	const { hovered, activeOfficePoint } = useSelector(selectMaps);
	const handlePointsClick = (activePoint: any) => {
        dispatch(setActiveOfficePointCoords(updateElementPosition(activePoint)));    
        dispatch(setActiveOfficePoint(activePoint));

        const hoveredElements = document.querySelectorAll('.office_point');
        const point = Array.from(hoveredElements).find(element => element.id === activePoint);

        if (point) {
            point.classList.add('hidden');
        } else {
        
        }
    };
	
	useEffect(() => {
		const handleResize = () => {
		  if (activeOfficePoint) {
			dispatch(setActiveOfficePointCoords(updateElementPosition(activeOfficePoint)));
		  }
		};
	
		window.addEventListener('resize', handleResize);
	
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, [activeOfficePoint, dispatch]);
	
	  const handleHoverOut = () => {
		
		dispatch(setHovered(null));
	
	};

	return (
	  <div className="flex flex-col relative w-1/4 m-auto">
		
  
		<div className={`grid grid-cols-1 lg:grid-cols-1 xl:border-b-0  xl:items-start w-full items-center`}>
		  {mapsData[0]?.officeCards?.map((card) => (
		
			<button
			  key={card.id}
			  className={`bg-[#285C5C]  text-center duration-200 col-span-1 p-3 my-1.5 text-[24px] text-[#AECA13] rounded-4xl w-full hover:!opacity-75 hover:!text-[#AECA13]
				${hovered == card.id ? 'text-primary-light' : ''} ${activeOfficePoint == card.id ? 'opacity-80' : ''} `}
			  onMouseEnter={() => dispatch(setHovered(card.id))}
			  onMouseLeave={() => {handleHoverOut()}}
			  onClick={() => handlePointsClick(card.id)}
			>
			  {card.city}
			</button>
			
		  ))}
		</div>
	  </div>
	);
  };
  
  export default MapSelectionSettings;