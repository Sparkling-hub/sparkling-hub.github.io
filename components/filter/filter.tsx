import React from 'react';
import MyMultileSelect from '../my-multi-select';
import IFilterProps from '@/interface/IFilterProps';


const Filter: React.FC<IFilterProps> = ({ dataJobs,
	filterPhraze,
	activeLocations,
	uniqueIds,
	activePositions,
	uniqueExp,
	uniqueWorkMode,
	activeWorkMode,

	handleFilterPrazeChange,
	handleParamsChange,
	deleteItem,

}) => {

	return (
		<div className="filter-container bg-gray-100 my-6 mx-10 w-[400px]">
			<h3 className="text-center text-3xl mt-10 mb-5  ">Open Position</h3>
			<div className="text-sm">
				<div className={`my-multiple-select mx-4`} >
					<div className="relative my-multiple-select-container w-full flex-col flex rounded-lg relative bg-color-primary-medium border-bg-color-primary-medium">
						<input id="filter_search" className="my-3.5 px-3 placeholder-teal-800 
							focus:outline-none
							bg-color-primary-medium 
							focus:bg-color-primary-medium 
							focus:bg-color-primary-medium"
							name="name"
							type="text"
							autoComplete='off'
							placeholder="Search by any keyword"
							value={filterPhraze}
							onChange={handleFilterPrazeChange} />
						<button className="absolute leading-9  h-full w-1/12  right-2">
						<img  src={"/img/jobs/search-ico.png"} className="h-4 opacity-60" alt="" />
						</button>
					</div>
				</div>
				<MyMultileSelect name={"location"}
					uniqueIds={uniqueIds}
					activeLocations={activeLocations}
					placeholder="Location"
					handleParamsChange={handleParamsChange}
					deleteItem={deleteItem} />

				<MyMultileSelect name={"exp"}
					uniqueIds={uniqueExp}
					activeLocations={activePositions}
					placeholder="Position"
					handleParamsChange={handleParamsChange}
					deleteItem={deleteItem} />

				<MyMultileSelect name={"mode"}
					uniqueIds={uniqueWorkMode}
					activeLocations={activeWorkMode}
					placeholder="Work mode"
					handleParamsChange={handleParamsChange}
					deleteItem={deleteItem} />



			</div>
		</div>

	);
};

export default Filter;

