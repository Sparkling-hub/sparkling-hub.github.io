import IMultiSelectActiveItem from '@/interface/IMultiSelectActiveItem';



const MultiSelectActiveItem: React.FC <IMultiSelectActiveItem> = ({  id, deleteItem, name, activeLocations }) => {


	return (		
		<div className="flex flex-no-wrap active-item-container z-50" title={id} >
			<button type="button" className="" title="Remove item" aria-label="Remove item" aria-describedby="select2-filter_locations-container-choice-rjty-Tel Aviv">
				<span className='delete_item_button' id={id} aria-hidden="true" onClick={(event) => {deleteItem(event, name, activeLocations)}}>×</span>
			</button>
			<span className="item-title select2-selection__choice__display" >{id}</span>
		</div>		
	);
};

export default MultiSelectActiveItem;
