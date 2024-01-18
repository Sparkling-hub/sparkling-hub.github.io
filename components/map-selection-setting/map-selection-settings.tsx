

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaps, setHovered, setActiveOfficePoint } from '@/store/redusers/mapsSliceReduser';


const MapSelectionSettings: React.FC = () => {
	const dispatch = useDispatch();
	const { currentMap, hovered, activeOfficePoint } = useSelector(selectMaps);
  
	return (
	  <div className="col-span-3 flex flex-col relative">
		<div className="border-l-2 border-primary-dark pl-12">
		  <div className="gh-2 pt-global duration-300">
			<div>
			  <div className="mb-12 text-center">
				<p className="text-2xl font-medium">See locations</p>
			  </div>
			</div>
		  </div>
		</div>
  
		<div className={`grid grid-cols-2  lg:grid-cols-2 max-lg:gap-x-global max-lg:gap-y-4 border-l-2 border-primary-dark pl-12`}>
		  {currentMap?.officeCards?.map((card) => (
			<button
			  key={card.id}
			  className={`lg:block btn duration-200 col-span-1 ml-8 p-4 text-xl text-left font-medium !p-0 !bg-transparent !pb-4 hover:!text-primary-light lg:opacity-100
				${hovered === card.id ? 'text-primary-light' : ''} ${activeOfficePoint === card.id ? 'text-white' : ''} `}
			  onMouseEnter={() => dispatch(setHovered(card.id))}
			  onMouseLeave={() => dispatch(setHovered(null))}
			  onClick={() => dispatch(setActiveOfficePoint(card.id))}
			>
			  {card.city}
			</button>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default MapSelectionSettings;