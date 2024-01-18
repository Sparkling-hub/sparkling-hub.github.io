import React from 'react';
import IMultiSelectActiveItem from '@/interface/IMultiSelectActiveItem';

const MultiSelectActiveItem: React.FC<IMultiSelectActiveItem> = ({ id, deleteItem, name, activeLocations }) => {

  return (
    <div className="flex flex-no-wrap active-item-container z-50 m-1" title={id}>
      <div className="" title="Remove item" aria-label="Remove item" aria-describedby="select2-filter_locations-container-choice-rjty-Tel Aviv">
        <span className='delete_item_button text-red-900 font-bold text-sm'
          id={id}
          aria-hidden="true"
          onClick={(event) => { deleteItem(event, name, activeLocations) }}>
          ×
        </span>
      </div>
      <span className="item-title select2-selection__choice__display">
        {id}
      </span>
    </div>
  );
};

export default MultiSelectActiveItem;
