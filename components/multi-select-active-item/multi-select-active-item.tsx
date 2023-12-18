import IMultiSelectActiveItem from '@/interface/IMultiSelectActiveItem';

const MultiSelectActiveItem: React.FC<IMultiSelectActiveItem> = ({ id, deleteItem }) => {

	return (

		<div className="flex flex-no-wrap active-item-container" title={id} >
			<button type="button" className="" title="Remove item" aria-label="Remove item" aria-describedby="select2-filter_locations-container-choice-rjty-Tel Aviv">
				<span 	id={id} 
						className='delete_item_button'  
						aria-hidden="true" 
						onClick={deleteItem} 
						onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
							if (event.key === 'Enter' || event.key === ' ') {
								deleteItem;
							}
						  }}>

							×
				</span>
			</button>
			<span className="item-title select2-selection__choice__display" >{id}</span>
		</div>

	);
};

export default MultiSelectActiveItem;
