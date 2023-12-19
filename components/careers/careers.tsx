import { useState, useEffect, ChangeEvent } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter/filter';
import {getResult} from "../search_function/search_function"
import ICareersProps from '@/interface/ICareersProps';



const Careers: React.FC<ICareersProps> = () => {

	const [filterPhraze, setfilterPhraze] = useState<string>("");
	const [uniqueIds, setUniqueIds] = useState<string[]>([]);	
	const [activeLocations, setactiveLocations] = useState<string[]>([]);
	const [uniqueExp, setUniqueExp] = useState<string[]>([]);
	const [activePositions, setActivePositions] = useState<string[]>([]);
	const handleLocationChange = (e: ChangeEvent<HTMLInputElement>,name:string, active:string[]) => {
		
		let newValue: string[] = []
	
		if (e.target.checked) {
			newValue = [...active, e.currentTarget.id]
		}
		else if (!e.currentTarget.checked){
			newValue = active.filter( (value) => value != e.currentTarget.id)
		}		

		if(name==='location'){setactiveLocations(newValue);}
		if(name==='exp'){setActivePositions(newValue)}
	};

	const handleFilterPrazeChange = (e: ChangeEvent<HTMLInputElement>) => {

		setfilterPhraze(e.currentTarget.value)
	
	};
	const deleteItem = (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[]) => {
		const idToDelete = e.currentTarget.id.toString(); // Convert to string
		console.log(active)
		const newValue = active.filter((value) => value !== idToDelete);
	
		if(name==='location'){setactiveLocations(newValue);}
		if(name==='exp'){setActivePositions(newValue)}
		e.stopPropagation();
	  };
	  

	useEffect(() => {		

		setUniqueIds(getResult(dataJobs, "id"));
		setUniqueExp(getResult(dataJobs, "nameProf"));

	}, [dataJobs]);

	const filteredJobsList = dataJobs.filter((job)=>{												
										if(!activeLocations.length) return dataJobs												
										return activeLocations.includes(job.id) })
									 .filter((job)=>{
										if(!activePositions) return dataJobs
										return activePositions.includes(job.nameProf)})
									 .filter((job)=>{
										if(!filterPhraze) return dataJobs										
										return job.namePosition.toLowerCase().includes(filterPhraze.toLowerCase())})

	return (
		<div className='flex relative'>

			<Filter dataJobs={dataJobs} 
					filterPhraze={filterPhraze}
					activeLocations = {activeLocations}
					uniqueIds={uniqueIds}					
					activePositions = {activePositions}
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
