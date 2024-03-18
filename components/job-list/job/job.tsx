import React from 'react';
import Link from 'next/link';
import Button from '../../ui/circle-button';
import IJob from '../../../interface/IJob';
import { v4 as uuidv4 } from 'uuid';
const JobsFiltre = ({ job }: { job: IJob }) => {
  return (
    <>
      <div className='py-3 px-5 text-gray-500 mb-5  font-semibold text-teal-700'>{job.experienceHTML}</div>
      <div className="bg-gray-100 shadow-sm flex text-gray-500 flex justify-between">
        <div className='flex pr-2 py-3 overflow-hidden w-full items-baseline'>
          <div className='w-5/6 z-10 ml-5 text-left items-left h-28 flex flex-col justify-center'>
            <h3 className='text-teal-700 text-[25px] mb-[7px]'>{job.head}</h3>
            {job.text.map((item) => (
              <p className='font-medium' key={uuidv4()}>
            {item}</p>
            ))}

          </div>
          <Link  href={{ pathname: 'careers/job', query: {id:job.slug}}} className='h-full w-1/6 animation flex justify-end rounded-full'>
            <Button isDropdownOpen={false} />
          </Link>
        </div>
      </div>
      <div className="flex items-center p-2 uppercase text-base">
        <img src={"/img/jobs/gps-img.png"} alt="GPS" className="h-5" />
        <img src={job.locationPath} alt="GPS" className="h-5 mx-1" />
        {job.locationHTML}
      </div>
    </>
  );
};

export default JobsFiltre;
