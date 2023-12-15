import { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter/filter';



const Careers: React.FC = () => {

	const [uniqueIds, setUniqueIds] = useState<string[]>([]);
	const [activeMultiselect, setLocation] = useState<string[]>([]);

	const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {

		let newValue: string[] = []

		if (e.target.checked) {
			newValue = [...activeMultiselect, e.target.id]
		}
		else if (!e.target.checked){
			newValue = activeMultiselect.filter( (value) => value != e.target.id)
		}		
		setLocation(newValue);
	};
	const deleteItem: MouseEventHandler<HTMLSpanElement> = (e) => {

		debugger
		// ваш код обработки события
	  };

	useEffect(() => {		
		const ids = dataJobs.map(job => job.id);
		const uniqueIdsSet = new Set(ids);
		const uniqueIdsArray = Array.from(uniqueIdsSet);
		setUniqueIds(uniqueIdsArray);
	  }, [dataJobs]);

	





	return (
		<div className='flex relative'>

			<Filter dataJobs={dataJobs} 
					uniqueIds={uniqueIds}					
					activeMultiselect = {activeMultiselect}
					handleLocationChange={handleLocationChange} 
					deleteItem = {deleteItem}
					/>

			<JobList />

		</div>
	);
};

export default Careers;
