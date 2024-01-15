import React, { useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import MultiSelectActiveItem from '../multi-select-active-item';
import IMultiSelect from '@/interface/IMultiSelect';
import InputLocate from '../ui/custom-input-jobs';


  
const MyMultipleSelect: React.FC<IMultiSelect> = ({ activeValues, uniqueIds,name, placeholder}) => {

	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	

	return (
		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >

			<button className={`my-multiple-select-container w-full flex-col flex rounded-lg relative bg-color-primary-medium border-bg-color-primary-medium h-auto`}
				onClick={handleClick}>
				<div className={`min-h-[32px] flex left-3 flex-wrap items-center h-auto ${activeValues.length ? ' p-3' : ''}`}>
					{activeValues.map((id: string) => (
						<MultiSelectActiveItem key={id}
							name={name}
					
							id={id} />
					))}
				</div>
				<div className={`flex items-center absolute right-4 top-5 z-10`}>
					<img src="/img/down-arrow-svgrepo-com.svg" className={`h-3 w-3 transition-transform transform ${isActive ? 'rotate-180' : 'rotate-0'}`} alt="" />
				</div>
				<div className={`mt-4 items-left w-full`} >
					<InputLocate
						id={"focused_input"}
						type={"text"}
						
						placeholder={activeValues.length ? "" : placeholder}
						name={name}
					
					/>
					<div className="text-left flex top-19 h-max w-full left-0 
                        list flex flex-wrap items-center p-1  rounded-b-lg border-t-[1px] 
                        border-slate-200 bg-color-primary-medium border-bg-color-primary-medium">
						{uniqueIds.length ? uniqueIds.map(id => (
							
							<CheckboxSelect
								id={id}
								checked={activeValues.includes(id.value)}
								name = {name}
							/>
						)) : "No found"}
					</div>
				</div>
			</button>
		</div>
	);
};

export default MyMultipleSelect;
