import React, { useState } from 'react';

import dataJobs from '../../data/data-jobs';
import IJob from '../../interface/IJob';
import JobsFiltre from './job/job';
const Section: React.FC = () => {
  const dataJobsArray: IJob[] = Object.values(dataJobs);
  const [selectedBid, setSelectedBid] = useState<string | null>(null);

  const filterJobs = () => {
    const filteredJobs = (job: IJob): boolean => {
      return selectedBid === job.experience.props.children;
    };
    return filteredJobs;
  };
  return (
    <>
      <div className="flex flex-wrap m-auto w-full m-3 relative">
        <div className={`m-6 w-full l border rounded cursor-pointer text-lg border-none bg-slate-100 rounded-2xl`}>

        </div>
        {(dataJobsArray ? dataJobsArray.filter(filterJobs) : []).map((job, index) => (
           <div className={`job-content bg-white rounded-xl m-5`} key={index}>
          <JobsFiltre job={job}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
