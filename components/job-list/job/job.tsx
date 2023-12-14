import React from 'react';
import Link from 'next/link';
import Button from '../../ui/circle-button';
import IJob from '../../../interface/IJob';

const JobsFiltre = ({ job }: { job: IJob } ) => {


  return (
    <>
     
        <div className='h-20 py-3 px-5 text-gray-500'>{job.experience}</div>
        <div className="bg-gray-100 shadow-sm flex text-gray-500 flex justify-between">
          <div className='flex pr-2 py-3 overflow-hidden w-full items-baseline'>
            <div className='w-5/6 z-10 ml-5 text-left items-left'>
              {job.head}
              {job.text}
            </div>
            <Link href={job.slug} className='h-full w-1/6 animation flex justify-end rounded-full '><Button isDropdownOpen= {false}/></Link>
          </div>
        </div>
        <div className="flex items-center p-2 uppercase text-base">
          <img src={"/img/jobs/gps-img.png"} alt="GPS" className="h-5" />
          {job.location}
          
        </div>
 
    </>
  );
};

export default JobsFiltre;
