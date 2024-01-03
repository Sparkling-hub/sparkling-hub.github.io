


import IMapField from "@/interface/IMapField";
import { useEffect, useState } from "react";
import PointOffice from "../point-office";
import IOfficeCards from "@/interface/IOfficeCards";
import Card from "../card";

const MapField: React.FC<IMapField> = ({ currentMap, hovered, activeOfficePoint, activeOfficePointCoords, setHovered, setActiveOfficePoint }) => {


    const [officeCard, setOfficeCard] = useState<IOfficeCards  | null>(null);
    

    useEffect(() => {

      let currentCard = currentMap?.officeCards?.find((card) => card.id == activeOfficePoint)
      if(currentCard) setOfficeCard(currentCard)
      
    }, [officeCard, activeOfficePoint, currentMap]);

    return (
      <div className="map-container col-span-9 lg:gh-4 xl:gh-4 xl:p-14 pt-global lg:block" style={{ position: "relative" }}>

        {officeCard && activeOfficePoint? <Card officeCard={officeCard} coord = {activeOfficePointCoords} setActiveOfficePoint={setActiveOfficePoint}/>  : ""}

        {currentMap ? currentMap.image : ""}

      </div>

    );
};

export default MapField;
