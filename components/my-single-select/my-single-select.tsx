import React, { useEffect,ChangeEvent, useState } from 'react';
import CheckboxSelect from '@/components/checkbox-select';
import SingleSelectActiveItem from '../single-select-active-item';
import ISingleSelect from '@/interface/ISingleSelect';
import InputLocate from '../ui/custom-input-jobs';
import { all } from 'axios';

const MySingleSelect: React.FC<ISingleSelect> = ({ dataJobs, uniqueExp, activeSingleselect, placeholder, handleExpChange, deleteItem }) => {

	const [isActive, setIsActive] = useState(false);

	const handleClick = (e: any) => {


		setIsActive(!isActive);
	};
	console.log(uniqueExp)
    const [searchValue, setSearchValue] = useState('');
    const [filteredIds, setFilteredIds] = useState<any>();
	useEffect(() => {

		setFilteredIds("all");
	  }, [uniqueExp]);
  console.log(activeSingleselect);
  
	return (

		<div className={`my-multiple-select ${isActive ? 'active' : ''} m-4`} >

			<div className={`my-single-select-container flex ${isActive ? 'rounded-t-lg' : 'rounded-lg'}  relative bg-color-primary-medium border-bg-color-primary-medium`} onClick={handleClick}>

				<div className={`flex ${activeSingleselect.length > 0 ? 'w-4/5' : ''} flex-wrap items-center `}>

		
						<SingleSelectActiveItem 		
							id={activeSingleselect} />
				

				</div>
				<div className={`flex items-center absolute right-4 bottom-0 top-0`}><img src="/img/down-arrow-svgrepo-com.svg"  className={`h-3 w-3 transition-transform transform ${isActive ? 'rotate-180' : 'rotate-0'}`} alt="" />
			</div>
	
				<div className={`${activeSingleselect.length > 0 ? 'w-1/5' : ''} p-4`} >
				<input type="text" 	name={"id"}   className="w-full p-2 placeholder-teal-800  focus:outline-none bg-color-primary-medium focus:bg-color-primary-medium"

   readOnly/>
					<div className="absolute top-19 h-max w-full left-0 z-10 list flex flex-wrap items-center p-4  rounded-b-lg border-t-[1px] border-slate-200 bg-color-primary-medium border-bg-color-primary-medium">

					{uniqueExp.map(id => (
						<CheckboxSelect
							key={id}
							id={id}
							checked={activeSingleselect===id}
							onChange={handleExpChange}
						/>
					))}
	
	
	
				</div>
				</div>
				
			</div>
			
		</div>


	);
};

export default MySingleSelect;