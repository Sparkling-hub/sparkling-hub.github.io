import { useState, useEffect, ChangeEvent } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter'
import { getIds } from './search_function/search_function'


import ICareersProps from '@/interface/ICareersProps';
import ICheckboxItem from '@/interface/IChekboxItem';



const Careers: React.FC<ICareersProps> = () => {

	const [filterPhraze, setFilterPhraze] = useState<string>("");
	const [uniqueIds, setUniqueIds] = useState<ICheckboxItem[]>([]);
	const [activeLocations, setActiveLocations] = useState<string[]>([]);
	const [uniqueExp, setUniqueExp] = useState<ICheckboxItem[]>([]);
	const [activePositions, setActivePositions] = useState<string[]>([]);
	const [uniqueWorkmode, setUniqueWorkmode] = useState<ICheckboxItem[]>([]);
	const [activeWorkmode, setActiveWorkmode] = useState<string[]>([]);

	const handleParamsChange = (e: ChangeEvent<HTMLInputElement>, name: string, active: string[]) => {
		let newValue: string[] = []

		if (e.target.checked) {
			newValue = [...active, e.currentTarget.id]
		}

		else if (!e.currentTarget.checked) {
			newValue = active.filter((value) => value != e.currentTarget.id)
		}

		if (name === 'location') { setActiveLocations(newValue); }
		if (name === 'exp') { setActivePositions(newValue) }
		if (name === 'mode') { setActiveWorkmode(newValue) }
	};

	useEffect(() => {
		setUniqueIds(getIds(dataJobs, "id"));
		setUniqueExp(getIds(dataJobs, "nameProf"));
		setUniqueWorkmode(getIds(dataJobs, "workMode"));
	
	}, [dataJobs]);


	const handleFilterPrazeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterPhraze(e.currentTarget.value)
	};

	const deleteItem = (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[]) => {
		const idToDelete = e.currentTarget.id.toString();
		const newValue = active.filter((value) => value !== idToDelete);

		if (name === 'location') { setActiveLocations(newValue); }
		if (name === 'exp') { setActivePositions(newValue) }
		if (name === 'mode') { setActiveWorkmode(newValue) }
		e.stopPropagation();
	};


	const filteredJobsList = dataJobs.filter((job) => {

		if (!activeLocations.length) return dataJobs
		return activeLocations.includes(job.id)
	})
		.filter((job) => {
			if (!activePositions.length) return dataJobs
			return activePositions.includes(job.nameProf)
		})

		.filter((job) => {
			if (!filterPhraze) return dataJobs
			return job.namePosition.toLowerCase().includes(filterPhraze.toLowerCase())
		})
		.filter((job) => {
			if (!activeWorkmode.length) return dataJobs
			return activeWorkmode.includes(job.workMode)
		})

	return (
		<div className='flex relative w-full'>

			<Filter dataJobs={dataJobs}
				filterPhraze={filterPhraze}
				activeLocations={activeLocations}
				uniqueIds={uniqueIds}
				activePositions={activePositions}
				uniqueWorkMode={uniqueWorkmode}
				activeWorkMode={activeWorkmode}
				uniqueExp={uniqueExp}
				handleFilterPrazeChange={handleFilterPrazeChange}
				handleParamsChange={handleParamsChange}
				deleteItem={deleteItem}
			/>

			<JobList jobs={filteredJobsList} />

		</div>
	);
};

export default Careers;
