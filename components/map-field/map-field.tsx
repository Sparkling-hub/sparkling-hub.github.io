import mapsData from "@/data/data-maps";
import IMapField from "@/interface/IMapField";
import IMaps from "@/interface/IMaps";
import { useEffect, useState } from "react";

const MapField: React.FC<IMapField> = ({ currentMap, hovered, ChangeMap, setHovered }) => {



  useEffect(() => {

    const mapItems = document.querySelectorAll('.item-map');
    mapItems.forEach((element) => {
      element.addEventListener('click', handleClick);
    });
    if (currentMap && currentMap.id != "world") document.querySelectorAll('.back-arrow')[0].addEventListener('click', handleClick);
    return () => {
      mapItems.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, [currentMap]);

  const handleClick = (e: any) => {
    
    ChangeMap(e)

  };

  
  return (
    <div className="map-container col-span-9 lg:gh-4 xl:gh-4 xl:p-14 pt-global lg:block" style={{ position: "relative" }}>
      {
        currentMap && currentMap.id == "world" ? "" : <img id="world" className="back-arrow  w-24 h-24 absolute top-0 right-5% cursor-pointer" src="/img/maps/Back-arrow.png" alt="" />
      }
      {currentMap ? currentMap.image : ""}
      
      {currentMap && currentMap.officeCards && currentMap.officeCards.map((card) =>{
				
				return	card.coords ? 
					<div
						key={card.id}						
						onMouseEnter={() => setHovered(card.id)}
              			onMouseLeave={() => setHovered(null)}
					>
						<div
							className={`absolute 
                          w-2.5 
                          h-2.5 
                          bg-red-900 
                          ${card.coords} 
                          rounded-full 
                          ${hovered === card.id ? 
                            // "-translate-x-1/2 -translate-x-1/2 z-40 cursor-pointer duration-200 group w-3.5 h-3.5 z-50" 
                            "animate-ping"
                            : 
                            ""}
                          `}
						></div>
						<div
							className={`absolute 
                          w-2.5 
                          h-2.5 
                          bg-red-500 
                          ${card.coords} 
                          rounded-full 
                          `}
						></div>
					</div>
				 : ""
						})
			
			}
     
     
    </div>

  );
};

export default MapField;
