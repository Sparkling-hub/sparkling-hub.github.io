import React, { useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import MultiSelectActiveItem from '../multi-select-active-item';
import IMultiSelect from '@/interface/IMultiSelect';


const MyMultipleSelect: React.FC<IMultiSelect> = ({  dataJobs, uniqueIds, activeMultiselect, placeholder, handleLocationChange, deleteItem }) => {

	const [isActive, setIsActive] = useState(false);
	const handleClick = () => {

		setIsActive(!isActive);
	};

	return (

		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >
			
			<div className={`my-multiple-select-container flex  rounded${isActive ? '-t' : ''}-lg overflow-hidden  bg-color-primary-medium border-bg-color-primary-medium`} onClick={handleClick}>

				<div className={`flex ${activeMultiselect.length > 0 ? 'w-4/5' : ''} flex-wrap items-center `}> 
					
					{activeMultiselect.map(id => (
						<MultiSelectActiveItem	key={id}
												deleteItem={deleteItem}
												id={id}/>
					))}

				</div>
				<div className={`${activeMultiselect.length > 0 ? 'w-1/5' : ''} p-4`}>
					<input
						id="focused_input"
						type="text"
						className="w-full p-2 placeholder-teal-800 focus:outline-none bg-color-primary-medium focus:bg-color-primary-medium focus:bg-color-primary-medium"
						placeholder="Set Location"
					/>
				</div>

			</div>
			<div className="list flex flex-wrap items-center p-4  rounded-b-lg  overflow-hidden border-t-[1px] border-slate-200 bg-color-primary-medium border-bg-color-primary-medium">

			{uniqueIds.map(id => (
				<CheckboxSelect
				key={id}
				onChange={handleLocationChange}
				id={id}
				checked={activeMultiselect.includes(id)}
				/>
			))}
				


			</div>
		</div>


	);
};

export default MyMultipleSelect;