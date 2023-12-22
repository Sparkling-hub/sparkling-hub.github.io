import mapsData from "@/data/data-maps";
import IMapSelectionSettings from "@/interface/IMapSelectionSettings";
import IMaps from "@/interface/IMaps";
import { useEffect, useState } from "react";

const countries = [
  {name: "Asia",id:"AI"},
	{name:"Africa",id:"AF"},
	{name:"Europe",id:"EU"},
	{name:"Australia",id:"OC"},
	{name:"South America",id:"SA"},
	{name:"North America",id:"NA"},
]

const MapSelectionSettings: React.FC<IMapSelectionSettings> = ({ currentMap, handleMapsClick  }) => {


  // console.log(selectedMaps)
  // debugger
  
  return (
    <div className="col-span-4 lg:col-span-3 flex flex-col">
    <div>

      <div className="gh-2 pt-global duration-300">
        <div className="">
          <div className="mb-12"><p>See locations</p>
            <div className="flex gap-4 flex-wrap group">

              {countries.map((country) => (
                <button id={country.id} className="btn duration-200 !flex gap-2 items-center light hover:bg-primary-light-light bg-primary-dark mx-4 p-4 font-medium" onClick={handleMapsClick}>{country.name}
                  <span className={`${country.id == currentMap?.id ? '' : 'hidden'}`} >
                    <div className="content-center icon-wrap child:h-4 child:w-4" rel="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L4 12" stroke="currentColor" stroke-width="2"></path>
                      </svg>
                    </div>
                  </span>
                  <span className={`${country.id == currentMap?.id ? 'hidden' : '' }`} >
                    <div className="content-center icon-wrap child:h-4 child:w-4" rel="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L12 20" stroke="currentColor" stroke-width="2"></path>
                        <path d="M20 12L4 12" stroke="currentColor" stroke-width="2"></path>
                      </svg>
                    </div>
                  </span>
                </button>
              ))
              }

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
    
  );
};

export default MapSelectionSettings;
