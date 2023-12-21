import React from 'react';
import JobsFiltre from './job/job';
import IJobListProps from '@/interface/IJobListProps';
import IJob from '@/interface/IJob';

const JobList: React.FC<IJobListProps> = ({ jobs }) => {
	return (
		<div className='sticky w-fit overflow-auto flex flex-col max-h-[600px]'>
			<div className="flex flex-wrap w-auto relative">
				{jobs.length ? (
					jobs.map((job: IJob) => (
						<div className={`job-content bg-white rounded-xl m-6`} key={job.slug}>
							<JobsFiltre job={job} />
						</div>
					))
				) : (
					<h3 className='font-medium m-auto w-[55%] p-5 text-5xl text-teal-700'>No found jobs</h3>
				)}
			</div>
		</div>
	);
};

export default JobList;
