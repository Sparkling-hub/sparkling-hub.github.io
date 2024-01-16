import React, { useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import MultiSelectActiveItem from '../multi-select-active-item';
import IMultiSelect from '@/interface/IMultiSelect';
import InputLocate from '../ui/custom-input-jobs';
import { useSelector } from 'react-redux';
import { selectCareers } from '@/store/redusers/CareersSliceReduser';
import { get } from '../careers/search_function/search_function';


  
const MyMultipleSelect: React.FC<IMultiSelect> = ({ id, placeholder}) => {

	const [isActive, setIsActive] = useState(false);

	const {
		uniqueIds,
		activeIds,
	  
	  } = useSelector(selectCareers);
	

	const handleClick = () => {
		setIsActive(!isActive);
	};
	const elStopPropagation = (e: any) => {		
		e.stopPropagation();		
	};

	const data = get(uniqueIds, id)
	const activeData = get(activeIds, id)

	return (
		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >

			<button className={`my-multiple-select-container w-full flex-col flex rounded-lg relative bg-color-primary-medium border-bg-color-primary-medium h-auto`}
				onClick={ handleClick }>
				<div className={`min-h-[32px] flex left-3 flex-wrap items-center h-auto ${activeIds.length ? ' p-3' : ''}`}>
					{activeData.map((active) => {
						
						return ( 
							<MultiSelectActiveItem name={id} id={active} key={active}/>
						)
					})}
				</div>
				<div className={`flex items-center absolute right-4 top-5 z-10`}>
					<img src="/img/down-arrow-svgrepo-com.svg" className={`h-3 w-3 transition-transform transform ${isActive ? 'rotate-180' : 'rotate-0'}`} alt="" />
				</div>
				<div className={`mt-4 items-left w-full`} >
					<InputLocate
						id={"focused_input"}
						type={"text"}
						placeholder={activeData.length ? "" : placeholder} name={id}					
					/>
					<div className="text-left flex top-19 h-max w-full left-0 
                        list flex flex-wrap items-center p-1  rounded-b-lg border-t-[1px] 
                        border-slate-200 bg-color-primary-medium border-bg-color-primary-medium" 
						onClick={ elStopPropagation }>
						{data.length ? data.map(dataCheckbox => (
							
							<CheckboxSelect
								key={dataCheckbox}
								id={dataCheckbox}
								checked={activeData.includes(dataCheckbox.value)} 
								name={id}					
							/>
						)) : "No found"}
					</div>
				</div>
			</button>
		</div>
	);
};

export default MyMultipleSelect;
