

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaps, setHovered, setActiveOfficePoint, setActiveOfficePointCoords } from '@/store/redusers/mapsSliceReduser';
import mapsData from "@/data/data-maps";

const MapSelectionSettings: React.FC = () => {
	const dispatch = useDispatch();
	const { hovered, activeOfficePoint } = useSelector(selectMaps);
	const handlePointsClick = (activePoint: any) => {		
		updateElementPosition(activePoint);		
		dispatch(setActiveOfficePoint(activePoint));
		
	};

	const updateElementPosition = (activePoint: string | null) => {
		if (!activePoint) return;
		const svgPoint = document.getElementById(activePoint);
		const parentElement = svgPoint?.parentElement;
	  
		if (svgPoint && parentElement) {
		  const rect = svgPoint.getBoundingClientRect();
		  const parentRect = parentElement.getBoundingClientRect();
	  
		  const relativeHeight = rect.top - parentRect.top - parentElement.scrollTop;
		  const relativeWidth = rect.left - parentRect.left - parentElement.scrollLeft;
	  
		  dispatch(setActiveOfficePointCoords([relativeHeight, relativeWidth]));
		}
	  };
	  

	return (
	  <div className="col-span-3 flex flex-col relative xl:w-fit w-4/5 m-auto  ">
		<div className="xl:border-l-2  border-t-2   xl:border-t-0  border-primary-dark pl-12">
		  <div className="gh-2 pt-global duration-300">
			<div>
			  <div className="mb-12 text-center">
				<p className="text-2xl font-medium">See locations</p>
			  </div>
			</div>
		  </div>
		</div>
  
		<div className={`grid grid-cols-2  lg:grid-cols-2 xl:border-b-0 max-lg:gap-x-global max-lg:gap-y-4 xl:border-l-2  border-b-2 border-primary-dark pl-12 xl:items-start  items-center`}>
		  {mapsData[0]?.officeCards?.map((card) => (
			<button
			  key={card.id}
			  className={`xl:text-start w-fit  m-auto  text-center lg:block btn duration-200 col-span-1 xl:ml-8 p-4 text-xl text-left font-medium !p-0 !bg-transparent !pb-4 hover:!text-primary-light lg:opacity-100
				${hovered === card.id ? 'text-primary-light' : ''} ${activeOfficePoint === card.id ? 'text-white' : ''} `}
			  onMouseEnter={() => dispatch(setHovered(card.id))}
			  onMouseLeave={() => dispatch(setHovered(null))}
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