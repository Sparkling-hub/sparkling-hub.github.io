


import IPointOffice from '@/interface/IPointOffice';
import React from 'react';
import Card from '@/components/card';


const PointOffice: React.FC<IPointOffice> = ({ officeCard, hovered, activeOfficePoint, setHovered, setActiveOfficePoint }) => {
	
	
	return (
		<div
            key={officeCard?.id}
            id={officeCard?.id}
            className={`${officeCard?.coords} absolute`}
            onMouseEnter={() => officeCard?  setHovered(officeCard.id) : null}
            onMouseLeave={() => setHovered(null)}
			onClick={() => officeCard? setActiveOfficePoint(officeCard.id) : null }
          >
           {activeOfficePoint === officeCard?.id ? <Card officeCard={officeCard}  setActiveOfficePoint={setActiveOfficePoint}/> : ""}

            <div
              className={` absolute
                          w-2.5 
                          h-2.5 
                          bg-primary-dark                            
                          rounded-full 
                          ${hovered === officeCard?.id ?
									// "-translate-x-1/2 -translate-x-1/2 z-40 cursor-pointer duration-200 group w-3.5 h-3.5 z-50" 
									"animate-ping"
									:
									""}
                          `}
			 

            ></div>
            <div
              className={` absolute
                          w-2.5 
                          h-2.5 
                          bg-primary-dark                           
                          rounded-full 
                          `}
            ></div>
          </div>

		
	);
};

export default PointOffice;
