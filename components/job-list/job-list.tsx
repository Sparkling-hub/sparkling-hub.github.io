import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/circle-button';
import IJob from '../../interface/IJob';
import dataJobs from '../../data/data-jobs';
import JobsFiltre from './job/job';

const JobList = () => {


	const filterJobs = () => {
		const filteredJobs = (job: IJob): boolean => {
		  return selectedBid === job.experience.props.children;
		};
		return filteredJobs;
	  };
	  const [selectedBid, setSelectedBid] = useState<string | null>(null);
	  const [search, setSearch] = useState({
		name: '',
		location: '',
		experience: ''
	  });


	const dataCareersList: IJob[] = Object.values(dataJobs);


	return (
		<>
			<div className='sticky w-full overflow-auto flex flex-col max-h-[600px] relative' id="jobs-container">
				<div className="flex flex-wrap m-auto w-full m-3  relative">
									
					{(dataCareersList ? dataCareersList.filter(filterJobs) : []).map((job, index) => (
						<div className={`job-content bg-white rounded-xl m-5`} key={index}>
							<JobsFiltre job={job} />
						</div>
					))}
				</div>
			</div>
		</>


	);
};

export default JobList;
