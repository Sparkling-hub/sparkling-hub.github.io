import mapsData from "@/data/data-maps";
import IMaps from "@/interface/IMaps";
import { useEffect, useState } from "react";
import Maps from "../maps";
import MapSelectionSettings from "../map-selection-setting";



const InteracticeMaps: React.FC = () => {
	const [currentMap, setCurrentMap] = useState<IMaps>();

	useEffect(() => {

		const foundMap = mapsData.find((mapItem) => mapItem.id === "world");
		setCurrentMap(currentMap || foundMap);
		const mapItems = document.querySelectorAll('.item-map');
		mapItems.forEach((element) => {
			element.addEventListener('click', handleMapsClick);
		});

		return () => {
			mapItems.forEach((element) => {
				element.removeEventListener('click', handleMapsClick);
			});
		};
	}, [currentMap]);

	const handleMapsClick = (e: any) => {

		const foundMap = mapsData.find((mapItem) => mapItem.id === e.currentTarget.id);
		debugger
		setCurrentMap(foundMap);

	};

	return (
		<div className="flex-section block_map relative has-dark-green-bg">
			<div className="bg-dark-green absolute inset-0 z-behind"></div>
			<div className="absolute top-[-100px]" id="section-12"></div>
			<div className="fade-in cubic reveal">
				<div className="grid relative grid-cols-12 px-global gap-x-global">

					<Maps />
					<MapSelectionSettings selectedMaps={ currentMap? currentMap.id : ""}/>

				</div>
			</div>
		</div>

	);
};

export default InteracticeMaps;
