


import IMapField from "@/interface/IMapField";
import { useEffect } from "react";
import PointOffice from "../point-office";

const MapField: React.FC<IMapField> = ({ currentMap, hovered, activeOfficePoint, ChangeMap, setHovered, setActiveOfficePoint }) => {



  useEffect(() => {

    const mapItems = document.querySelectorAll('.item-map1');
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

      {currentMap?.officeCards?.map((card) => {

        return card.coords ?
          <PointOffice officeCard={card} hovered={hovered} setHovered={setHovered} activeOfficePoint={activeOfficePoint} setActiveOfficePoint={setActiveOfficePoint}/>          
          : 
          ""
      })

      }


    </div>

  );
};

export default MapField;
