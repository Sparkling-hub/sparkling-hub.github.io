import React from 'react';
import MyMultileSelect from '../my-multi-select';
import IFilterProps from '@/interface/IFilterProps';

import MySingleSelect from '../my-single-select';


const Filter: React.FC<IFilterProps> = ({ 	dataJobs, 
											filterPhraze,
											activeMultiselect,
											uniqueIds,
											activeSingleselect,											
											uniqueExp, 
											
											handleFilterPrazeChange,
											handleLocationChange, 
											deleteItem,
											handleExpChange, 
											}) => {

	return (
		<div className="filter-container sticky bg-gray-100 ">
			<h3 className="text-center text-3xl mt-10 mb-5 ">Open Position</h3>
			<div className="text-sm">
				<div className="input search m-4 h-9 flex bg-gray-200 rounded-md relative">
					<input 	id="filter_search"
							className="w-full h-full bg-gray-200 rounded-md pl-5 "
							name="name" 
							type="text"							 
							placeholder="Search by any keyword"  
							value={filterPhraze} 
							onChange={handleFilterPrazeChange}/>
					<button className="absolute leading-9 h-full w-2/12  right-0">
						<img src="https://www.kape.com/wp-content/themes/kape/assets/img/search-ico.png" className="w-3 h-3 m-auto" alt="" />
					</button>
				</div>

				<MyMultileSelect dataJobs={dataJobs}
								 uniqueIds={uniqueIds}
								 activeMultiselect={activeMultiselect}
								 placeholder="Set Location"
								 handleLocationChange={handleLocationChange}
								 deleteItem={deleteItem} />


				<MySingleSelect dataJobs={dataJobs}
								uniqueExp={uniqueExp}
								activeSingleselect={activeSingleselect}
								placeholder="Set Location"
								handleExpChange={handleExpChange} />

			</div>
		</div>

	);
};

export default Filter;

