import { useEffect } from 'react';
import Jobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter'
import { getIds } from './search_function/search_function'
import { useDispatch, useSelector } from 'react-redux';

import ICareersProps from '@/interface/ICareersProps';

import {
	selectCareers,
	setUniqueIds,
	setActiveIds,
	setJobsAction
} from '@/store/redusers/CareersSliceReduser';


const Careers: React.FC<ICareersProps> = () => {
	const dispatch = useDispatch();


	const { dataJobs } = useSelector(selectCareers)

	useEffect(() => {
		dispatch(setJobsAction({ value: Jobs }));

		const result = {
			workMode: getIds(Jobs, 'workMode'),
			experience: getIds(Jobs, 'experience'),
			location: getIds(Jobs, 'location'),
		};

		const activeIds = {
			workMode: [],
			experience: [],
			location: [],
		};


		dispatch(setUniqueIds({ value: result }));
		dispatch(setActiveIds({ value: activeIds }));
	}, [dataJobs, dispatch]);




	return (


		<div className='flex relative w-full items-center lg:items-start flex-col lg:flex-row'>

			<Filter
			/>
			<JobList />
		</div>

	);
};

export default Careers;


