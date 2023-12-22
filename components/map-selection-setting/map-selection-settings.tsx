import mapsData from "@/data/data-maps";
import IMapSelectionSettings from "@/interface/IMapSelectionSettings";
import IMaps from "@/interface/IMaps";
import { useEffect, useState } from "react";

const countries = [
	"Asia",
	"Africa",
	"Europe",
	"Australia",
	"South America",
	"North America"
]

const MapSelectionSettings: React.FC<IMapSelectionSettings> = ({ id }) => {



  // const [currentMap, setCurrentMap] = useState<IMaps>();

  // useEffect(() => {
   
  //   const foundMap = mapsData.find((mapItem) => mapItem.id === "world");
  //   setCurrentMap(currentMap || foundMap);   
  //   const mapItems = document.querySelectorAll('.item-map');
  //   mapItems.forEach((element) => {
  //     element.addEventListener('click', handleEUClick);
  //   });
	
  //   return () => {      
  //     mapItems.forEach((element) => {
  //       element.removeEventListener('click', handleEUClick);
  //     });
  //   };
  // }, [currentMap]);

  // const handleEUClick = (e:any) => {
	
	// const foundMap = mapsData.find((mapItem) => mapItem.id === e.currentTarget.id);	
	// setCurrentMap(foundMap);
	
  // };

  return (
    <div className="col-span-4 lg:col-span-3 flex flex-col">
    <div>

      <div className="gh-2 pt-global duration-300">
        <div className="">
          <div className="mb-12"><p>See locations</p>
            <div className="flex gap-4 flex-wrap group">

              {countries.map((country) => (
                <button className="btn duration-200 !flex gap-2 items-center light hover:bg-primary-light-light bg-primary-dark mx-4 p-4 font-medium">{country}
                  <span className="hidden">
                    <div className="content-center icon-wrap child:h-4 child:w-4" rel="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L4 12" stroke="currentColor" stroke-width="2"></path>
                      </svg>
                    </div>
                  </span>
                  <span className="">
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
