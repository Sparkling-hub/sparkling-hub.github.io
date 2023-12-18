import React, { useEffect, ChangeEvent, useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import MultiSelectActiveItem from '../multi-select-active-item';
import IMultiSelect from '@/interface/IMultiSelect';
import InputLocate from '../ui/custom-input-jobs';

const MyMultipleSelect: React.FC<IMultiSelect> = ({ dataJobs, uniqueIds, location, placeholder, handleLocationChange, deleteItem }) => {

	const [isActive, setIsActive] = useState(false);

	const handleClick = (e: any) => {
		setIsActive(!isActive);
	};
	const handleClickDropDown = (e: any) => {
		e.stopPropagation()
	};
	const [searchValue, setSearchValue] = useState('');
	const [filteredIds, setFilteredIds] = useState(uniqueIds);
	useEffect(() => {		
		setFilteredIds([...uniqueIds]);
	}, [uniqueIds]);
	
	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {

		setIsActive(true);
		const inputValue = event.target.value.toLowerCase();
		setSearchValue(inputValue);


		const filtered = uniqueIds.filter((id) => id.toLowerCase().includes(inputValue));
		setFilteredIds(filtered);
	};


	return (

		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >

			<div role="button" className={`my-multiple-select-container flex ${isActive ? 'rounded-t-lg' : 'rounded-lg'}  relative bg-color-primary-medium border-bg-color-primary-medium`} onClick={handleClick} onKeyDown={handleClick}   tabIndex={0}>

				<div className={`flex ${location.length > 0 ? 'w-4/5' : ''} flex-wrap items-center `}>

					{location.map(id => (
						<MultiSelectActiveItem key={id}
							deleteItem={deleteItem}
							id={id} />
					))}

				</div>
				<div className={`flex items-center absolute right-4 bottom-0 top-0`}><img src="/img/down-arrow-svgrepo-com.svg" className={`h-3 w-3 transition-transform transform ${isActive ? 'rotate-180' : 'rotate-0'}`} alt="" />
				</div>

				<div className={`${location.length > 0 ? 'w-1/5' : ''} px-4`} >
					<InputLocate
						id={"focused_input"}
						type={"text"}
						value={searchValue}
						placeholder={"Set Location"}
						name={"id"}
						handleSearchChange={handleSearchChange}
					/>
					<div role="button" className="absolute top-19 h-max w-full left-0 z-10 list flex flex-wrap items-center p-4  rounded-b-lg border-t-[1px] border-slate-200 bg-color-primary-medium border-bg-color-primary-medium" onClick={handleClickDropDown} onKeyDown={handleClickDropDown}   tabIndex={0}>

						{filteredIds.length ? filteredIds.map(id => (
							<CheckboxSelect
								key={id}
								id={id}
								checked={location.includes(id)}
								onChange={handleLocationChange}
							/>
						)) : "No found"}



					</div>
				</div>

			</div>

		</div>


	);
};

export default MyMultipleSelect;