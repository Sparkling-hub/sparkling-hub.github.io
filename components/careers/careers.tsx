import { useState, useEffect } from 'react';
import dataJobs from '../../data/data-jobs';
import IJob from '../../interface/IJob';
// import JobsFiltre from '../job/job';
import JobList from '../job-list';
import Filter from '../filter/filter';
const Section: React.FC = () => {


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
    <div className='flex relative'>

      <Filter search={search}setSearch={setSearch} dataJobs={dataJobs} />
      <JobList />
    </div>
  );
};

export default Section;
