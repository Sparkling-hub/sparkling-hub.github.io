import { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter/filter';
import {getResult} from "../search_function/search_function"


const Careers: React.FC = () => {

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
	const deleteItem: MouseEventHandler<HTMLSpanElement> = (e) => {
		
		let newValue = activeMultiselect.filter( (value) => value != e.currentTarget.id)
		setLocation(newValue);
		
	  };

	useEffect(() => {		
	
		setUniqueIds(getResult(dataJobs, "id"));
		setUniqueExp(getResult(dataJobs, "nameProf"));
	  }, [dataJobs]);

	





	return (
		<div className='flex relative'>

			<Filter dataJobs={dataJobs} 
					uniqueIds={uniqueIds}					
					activeMultiselect = {activeMultiselect}
					handleLocationChange={handleLocationChange}
					uniqueExp={uniqueExp}
					activeSingleselect = {activeSingleselect}
					handleExpChange={handleExpChange} 
					deleteItem = {deleteItem}
					/>

			<JobList />

		</div>
	);
};

export default Careers;
