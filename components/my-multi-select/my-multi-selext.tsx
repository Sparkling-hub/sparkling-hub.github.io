import React, { ChangeEvent, useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import MultiSelectActiveItem from '../multi-select-active-item';
import IMultiSelect from '@/interface/IMultiSelect';
import InputLocate from '../ui/custom-input-jobs';

const MyMultipleSelect: React.FC<IMultiSelect> = ({ dataJobs, uniqueIds, activeMultiselect, placeholder, handleLocationChange, deleteItem }) => {

	const [isActive, setIsActive] = useState(false);
	const [value, setIsvalue] = useState('');
	const handleClick = (e: any) => {


		setIsActive(!isActive);
	};
    const [searchValue, setSearchValue] = useState('');
    const [filteredIds, setFilteredIds] = useState(uniqueIds);
  
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsActive(true);
      const inputValue = event.target.value.toLowerCase();
      setSearchValue(inputValue);
  
      const filtered = uniqueIds.filter((id) => id.toLowerCase().includes(inputValue));
      setFilteredIds(filtered);
      uniqueIds=filtered;
      console.log(uniqueIds);
    };
	return (

		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >

			<div className={`my-multiple-select-container flex ${isActive ? 'rounded-t-lg' : 'rounded-lg'} overflow-hidden  relative bg-color-primary-medium border-bg-color-primary-medium`} onClick={handleClick}>

				<div className={`flex ${activeMultiselect.length > 0 ? 'w-4/5' : ''} flex-wrap items-center `}>

					{activeMultiselect.map(id => (
						<MultiSelectActiveItem key={id}
							deleteItem={deleteItem}
							id={id} />
					))}

				</div>
				<div className={`flex items-center absolute right-4 bottom-0 top-0 `}><img src="/img/down-arrow-svgrepo-com.svg"  className={`h-3 w-3 transition-transform transform ${isActive ? 'rotate-180' : 'rotate-0'}`} alt="" />
			</div>
				<div className={`${activeMultiselect.length > 0 ? 'w-1/5' : ''} p-4`} >
					<InputLocate
						id={"focused_input"}
						type={"text"}
						value={searchValue}
						placeholder={"Set Location"}
						name={"id"}
						handleSearchChange={handleSearchChange}
					/>
				</div>
				
			</div>
			<div className="list flex flex-wrap items-center p-4  rounded-b-lg  overflow-hidden border-t-[1px] border-slate-200 bg-color-primary-medium border-bg-color-primary-medium">

				{filteredIds.length?filteredIds.map(id => (
					<CheckboxSelect
						key={id}
						id={id}
						checked={activeMultiselect.includes(id)}
						onChange={handleLocationChange}
					/>
				)):"No found"}



			</div>
		</div>


	);
};

export default MyMultipleSelect;