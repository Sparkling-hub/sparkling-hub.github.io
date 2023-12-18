
import ISingleSelectActiveItem from '@/interface/ISingleSelectActiveItem';



const SingleSelectActiveItem: React.FC<ISingleSelectActiveItem> = ({ id }) => {

	return (

		<div className="flex flex-no-wrap mx-4" title={id} >
			<span className="item-title select2-selection__choice__display" >{id}</span>
		</div>

	);
};

export default SingleSelectActiveItem;
