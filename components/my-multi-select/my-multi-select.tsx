import React, { useEffect, ChangeEvent, useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import MultiSelectActiveItem from '../multi-select-active-item';
import IMultiSelect from '@/interface/IMultiSelect';
import InputLocate from '../ui/custom-input-jobs';

const MyMultipleSelect: React.FC<IMultiSelect> = ({ name, uniqueIds, activeLocations, placeholder, handleParamsChange, deleteItem }) => {
	
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
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

		const filtered = uniqueIds.filter((id) => {
			return id.value.toLowerCase().includes(inputValue);
		});
		setFilteredIds(filtered);
	};

	return (
		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >

			<button className={`my-multiple-select-container w-full flex-col flex rounded-lg relative bg-color-primary-medium border-bg-color-primary-medium h-auto`}
				onClick={handleClick}>
				<div className={`min-h-[32px] flex left-3 flex-wrap items-center h-auto ${activeLocations.length ? ' p-3' : ''}`}>
					{activeLocations.map(id => (
						<MultiSelectActiveItem key={id}
							deleteItem={deleteItem}
							name={name}
							activeLocations={activeLocations}
							id={id} />
					))}
				</div>
				<div className={` flex items-center absolute right-4 top-5 z-10`}><img src="/img/down-arrow-svgrepo-com.svg" className={`h-3 w-3 transition-transform transform ${isActive ? 'rotate-180' : 'rotate-0'}`} alt="" />
				</div>
				<div className={`mt-4 items-left w-full`} >
					<InputLocate
						id={"focused_input"}
						type={"text"}
						value={searchValue}
						placeholder={activeLocations.length ? "" : placeholder}
						name={name}
						handleSearchChange={handleSearchChange}
					/>
					<div className="text-left flex top-19 h-max w-full left-0 
                        list flex flex-wrap items-center p-1  rounded-b-lg border-t-[1px] 
                        border-slate-200 bg-color-primary-medium border-bg-color-primary-medium">
						{filteredIds.length ? filteredIds.map(id => (
							
							<CheckboxSelect
								key={id.value}
								id={id}
								checked={activeLocations.includes(id.value)}
								onChange={(event) => handleParamsChange(event, name, activeLocations)}
							/>
						)) : "No found"}
					</div>
				</div>
			</button>
		</div>
	);
};

export default MyMultipleSelect;
