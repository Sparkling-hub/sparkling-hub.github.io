import { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter/filter';
import {getResult} from "../search_function/search_function"

import ICareersProps from '@/interface/ICareersProps';
import IJob from '@/interface/IJob';



const Careers: React.FC<ICareersProps> = () => {

	const [filterPhraze, setFilterPraze] = useState<string>("");
	const [uniqueIds, setUniqueIds] = useState<string[]>([]);	
	const [activeMultiselect, setLocation] = useState<string[]>([]);
	const [uniqueExp, setUniqueExp] = useState<string[]>([]);
	const [activeSingleselect, setExp] = useState<string>("");
	const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
		
		let newValue: string[] = []

		if (e.target.checked) {
			newValue = [...activeMultiselect, e.currentTarget.id]
		}
		else if (!e.currentTarget.checked){
			newValue = activeMultiselect.filter( (value) => value != e.currentTarget.id)
		}		
		setLocation(newValue);
	};
	const handleExpChange = (e: ChangeEvent<HTMLInputElement>) => {

		setExp(e.currentTarget.id)
	
	};
	const handleFilterPrazeChange = (e: ChangeEvent<HTMLInputElement>) => {

		setFilterPraze(e.currentTarget.value)
	
	};
	const deleteItem: MouseEventHandler<HTMLSpanElement> = (e) => {
		
		let newValue = activeMultiselect.filter( (value) => value != e.currentTarget.id)
		setLocation(newValue);
		e.stopPropagation()
		
	};

	useEffect(() => {		

		setUniqueIds(getResult(dataJobs, "id"));
		setUniqueExp(getResult(dataJobs, "nameProf"));

	}, [dataJobs]);

	const filteredJobsList = dataJobs.filter((job)=>{												
										if(!activeMultiselect.length) return dataJobs												
										return activeMultiselect.includes(job.id) })
									 .filter((job)=>{
										if(!activeSingleselect) return dataJobs
										return activeSingleselect.includes(job.nameProf)})
									 .filter((job)=>{
										if(!filterPhraze) return dataJobs										
										return job.namePosition.toLowerCase().includes(filterPhraze.toLowerCase())})

	return (
		<div className='flex relative'>

			<Filter dataJobs={dataJobs} 
					filterPhraze={filterPhraze}
					activeMultiselect = {activeMultiselect}
					uniqueIds={uniqueIds}					
					activeSingleselect = {activeSingleselect}
					uniqueExp={uniqueExp}

					handleFilterPrazeChange={handleFilterPrazeChange}
					handleLocationChange={handleLocationChange}
					deleteItem = {deleteItem}					
					handleExpChange={handleExpChange} 
					/>

			<JobList jobs = {filteredJobsList}/>

		</div>
	);
};

export default Careers;
