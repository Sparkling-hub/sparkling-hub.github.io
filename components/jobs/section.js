import React, { useState, useEffect } from 'react';

import dataJobs from '../../data/data-jobs'

import JobsFiltre from './job/job'


function areElementsUnique(arr) {
  const seen = new Set();
  arr.filter((item) => {

    const value = item.experience.props.children;

    return seen.has(value) ? false : seen.add(value);
  })

  return [...seen];
}


const Section = () => {
  const [selectedBid, setSelectedBid] = useState(null);
  const uniqueBidsSet = (areElementsUnique(dataJobs));
  const filterJobs = () => {
    // Используем Array.prototype.filter для фильтрации данных
    const filteredJobs =  dataJobs.filter((job) => {   
 
     return (selectedBid==job.experience.props.children)?job:null;}) 
      
      console.log(filteredJobs)

    return filteredJobs;
  };




  return (<>

    <div className="flex flex-wrap m-auto w-full m-3 relative">

      <div className={`m-6 w-full l border rounded cursor-pointer text-lg border-none bg-slate-100 rounded-2xl`}>
        {uniqueBidsSet.map((experience, index) => (


          <button className={`no-underline py-1 px-8 ${experience == selectedBid ? 'on' : 'off'} rounded-3xl`} key={index} onClick={() => { experience == selectedBid ? setSelectedBid(null) : setSelectedBid(experience); filterJobs() }}>
            {experience}
          </button>


        ))}
      </div>

      {(filterJobs() ? filterJobs() : dataJobs).map((job, index) => (

        <JobsFiltre job={job} key={index} filter={filterJobs} />
      ))}
    </div>
  </>



  )

}
export default Section;
