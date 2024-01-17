import React, { useEffect } from 'react';
import JobsFiltre from './job/job';
import IJob from '@/interface/IJob';
import { filterJobs, selectCareers } from '@/store/redusers/CareersSliceReduser';
import { useDispatch, useSelector } from 'react-redux';

const JobList: React.FC = () => {
	const dispatch = useDispatch();

	const { filteredJobsList, activeIds, filterPhraze } = useSelector(selectCareers)
	useEffect(() => { dispatch(filterJobs()) }, [activeIds, filterPhraze]);
	const jobs = filteredJobsList

	return (
		<div className='w-full overflow-auto flex flex-col m-6 '>
			{jobs.length ? (
				<div className="flex flex-wrap w-auto relative w-full">
					{jobs.map((job: IJob) => (
						<div className={`job-content bg-white rounded-xl  mx-[14px] mb-6 w-5/12`} key={job.slug}>
							<JobsFiltre job={job} />
						</div>
					))}
				</div>
			) : (
				<div className='w-full h-full flex justify-center'>
					<h3 className='font-medium flex items-center w-full h-full text-5xl text-teal-700 justify-center'>
						No found jobs
					</h3>
				</div>
			)}
		</div>
	);
};

export default JobList;


