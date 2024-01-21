import mapsData from "@/data/data-maps";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectMaps,
	setCurrentMap,
	setHovered,
	setLastHovered,
	setActiveOfficePoint,
	setActiveOfficePointCoords,
} from '@/store/redusers/mapsSliceReduser';
import MapField from '@/components/map-field';
import MapSelectionSettings from '@/components/map-selection-setting';

const InteracticeMaps: React.FC = () => {
	const dispatch = useDispatch();
	const { currentMap, hovered, lastHovered, activeOfficePoint } = useSelector(selectMaps);

	useEffect(() => {
		const foundMap = mapsData.find((mapItem) => mapItem.id === 'world_all');
		dispatch(setCurrentMap(foundMap));

		let points = document.querySelectorAll('.office_point .block');

		setupPointEventListeners(points);

		window.addEventListener('resize', () =>{
			if(!activeOfficePoint) return
			updateElementPosition(activeOfficePoint)	
		} );
		window.addEventListener('scroll', () =>{
			if(!activeOfficePoint) return
			updateElementPosition(activeOfficePoint)
		}
		 );

		handleHover();
		

		if (lastHovered && hovered !== lastHovered || (lastHovered && !hovered)) {
			let elements = document.getElementById(lastHovered)?.children;

			if (elements) {
				for (const element of elements) {
					element.classList.toggle('hidden');
					element.classList.toggle('block');
					dispatch(setLastHovered(''));
				}
			}
		}

		if (activeOfficePoint) {
			updateElementPosition(activeOfficePoint);
		}

		return () => {
			removePointEventListeners(points);
			removeWindowEventListeners();
		};
	}, [currentMap, hovered, lastHovered, activeOfficePoint, dispatch]);

	const handleHover = () => {

		let points = document.querySelectorAll('.office_point');

		if (!points.length) return

		if (hovered) {

			let elements = document.getElementById(hovered)?.children;

			if (elements && !lastHovered) {
				for (const element of elements) {
					element.classList.toggle('hidden');
					element.classList.toggle('block');
					dispatch(setLastHovered(hovered));
				}
			}
		}
	};

	const setupPointEventListeners = (points: NodeListOf<Element>) => {
		points.forEach((element) => {
			element.addEventListener('click', handlePointsClick);
			element.addEventListener('mouseover', handleHoverOver);
			element.addEventListener('mouseout', handleHoverOut);
		});
	};

	const removePointEventListeners = (points: NodeListOf<Element>) => {
		points.forEach((element) => {
			element.removeEventListener('click', handlePointsClick);
		});
	};

	const removeWindowEventListeners = () => {
		window.removeEventListener('resize', () => updateElementPosition(activeOfficePoint));
		window.removeEventListener('scroll', () => updateElementPosition(activeOfficePoint));
	};

	const handlePointsClick = (e: any) => {		
		let officeId = e.currentTarget.id;
		updateElementPosition(officeId);
		debugger
		dispatch(setActiveOfficePoint(officeId));
		e.stopPropagation();
	};

	const handleHoverOver = (e: any) => {
		
		dispatch(setHovered(e.currentTarget.closest('.office_point').id));

	};

	const handleHoverOut = (e: any) => {
		
		dispatch(setHovered(''));
	
	};

	const updateElementPosition = (activePoint: string | null) => {
		if (!activePoint) return;
		const svgPoint = document.getElementById(activePoint);

		if (svgPoint) {
			const rect = svgPoint?.getBoundingClientRect();
			const topCoordinate = rect.top;
			const leftCoordinate = rect.left;

			dispatch(setActiveOfficePointCoords([topCoordinate, leftCoordinate]));
		}
	};

	return (
		<div className="flex-section block_map relative">
			<div className="absolute inset-0 z-behind"></div>
			<div className="absolute top-[-100px]" id="section-12"></div>
			<div className="fade-in cubic reveal">
				<div className="xl:grid relative grid-cols-12 px-global gap-x-global flex flex-col-reverse">
					<MapField />
					<MapSelectionSettings />
				</div>
			</div>
		</div>
	);
};

export default InteracticeMaps;