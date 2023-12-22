import mapsData from "@/data/data-maps";
import IMaps from "@/interface/IMaps";
import { useEffect, useState } from "react";

const Maps: React.FC<any> = ({currentMap, handleMapsClick}) => {
  
  useEffect(() => {
    debugger
    if(currentMap && currentMap.id != "world") document.querySelectorAll('.back-arrow')[0].addEventListener('click', handleMapsClick);
    
  }, []);


  
  return (
	<div className="map-container col-span-8 lg:col-span-9 lg:gh-4 xl:gh-4 xl:p-14 pt-global lg:block" style={{ position: "relative" }}>
      {
        currentMap && currentMap.id == "world" ? "" : <img id="world" className="back-arrow w-24 h-24 absolute top-0 right-10 cursor-pointer" src="/img/maps/Back-arrow.png" alt="" />
      }
      
      {currentMap ? currentMap.image : ""}
      <div className="static-point"></div>
    </div>
    
  );
};

export default Maps;
