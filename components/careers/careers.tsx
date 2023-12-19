import { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter/filter';
import ICareersProps from '@/interface/ICareersProps';
import {getIds} from './search_function/search_function'

const Careers: React.FC<ICareersProps> = () => {

	const [filterPhraze, setFilterPraze] = useState<string>("");
	const [uniqueIds, setUniqueIds] = useState<string[]>([]);	
	const [activeMultiselect, setLocation] = useState<string[]>([]);
	const [uniqueExp, setUniqueExp] = useState<string[]>([]);
	const [activeSingleselect, setExp] = useState<string[]>([]);
	const handleLocationChange = (e: ChangeEvent<HTMLInputElement>,name:string, active:string[]) => {
		
		let newValue: string[] = []
		if (e.target.checked) {
			newValue = [...active, e.currentTarget.id]
		}
		else if (!e.currentTarget.checked){
			newValue = active.filter( (value) => value != e.currentTarget.id)
		}		


		if(name==='location'){setLocation(newValue);}
		if(name==='exp'){setExp(newValue)}

	};

	useEffect(() => {		

		setUniqueIds(getIds(dataJobs, "id"));
		setUniqueExp(getIds(dataJobs, "nameProf"));

	}, [dataJobs]);
	const handleFilterPrazeChange = (e: ChangeEvent<HTMLInputElement>) => {

		setFilterPraze(e.currentTarget.value)
	
	};
	const deleteItem = (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[]) => {
		const idToDelete = e.currentTarget.id.toString(); // Convert to string
		console.log(active)
		const newValue = active.filter((value) => value !== idToDelete);
	
		if(name==='location'){setLocation(newValue);}
		if(name==='exp'){setExp(newValue)}
		e.stopPropagation();
	  };
	  
	
	const filteredJobsList = dataJobs.filter((job)=>{												
										if(!activeMultiselect.length) return dataJobs												
										return activeMultiselect.includes(job.id) })
									 .filter((job)=>{
										if(!activeSingleselect.length) return dataJobs
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

					/>

			<JobList jobs = {filteredJobsList}/>

		</div>
	);
};

export default Careers;
