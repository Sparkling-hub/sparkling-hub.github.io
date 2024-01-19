

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaps, setActiveOfficePoint, setOfficeCard } from '@/store/redusers/mapsSliceReduser';
import Card from '@/components/card';

const MapField: React.FC = () => {
  const dispatch = useDispatch();
  const { currentMap, activeOfficePoint } = useSelector(selectMaps);

  useEffect(() => {
    let mapContainer = document.querySelector('.map-container');
    mapContainer?.addEventListener('click', handleMapsClick);

    let currentCard = currentMap?.officeCards?.find((card) => card.id === activeOfficePoint);
    if (currentCard) dispatch(setOfficeCard(currentCard));

    return () => {
      mapContainer?.removeEventListener('click', handleMapsClick);
    };
  }, [activeOfficePoint, currentMap, dispatch]);

  const handleMapsClick = (e: any) => {
    if (activeOfficePoint) dispatch(setActiveOfficePoint(''));
    dispatch(setOfficeCard(null));
  };

  return (
    <div className="map-container col-span-9 lg:gh-4 xl:gh-4 xl:p-14 pt-global lg:block " style={{ position: 'relative' }}>
      {currentMap ? currentMap.image : ''}
      {activeOfficePoint ? <Card /> : ''}
    </div>
  );
};

export default MapField;
