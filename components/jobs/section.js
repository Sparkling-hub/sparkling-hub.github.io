import React from 'react';
import gps from './image/gps.png'
import dataJobs from '../../data/data-jobs'
import Link from 'next/link';
import Button from '../ui/circle-button';

const Section = () => {

  return (
    <div class="flex flex-wrap justify-center">


      {dataJobs.map((job, index) => (
   <div className="job-content border border-gray-100 border-solid border-1 rounded-xl shadow-sm relative ">


          <div className='h-20  py-3 px-5 text-gray-500'>{job.bid}</div>
         

     
          
            <div className=" bg-gray-100   shadow-sm flex text-gray-500  flex justify-between ">
              <div className='flex px-5 py-3  overflow-hidden'>
              <p className='w-5/6 z-10'>
              
                {job.head}
                  {job.text}
                  {job.salary}
           
              </p>
               
              <Link href={job.slug} className='animation my-2 relative'><Button/></Link>
              </div> 
          
       
            </div>       
            <div className="flex items-center p-2  mx-5 uppercase text-base">  <img src={gps} alt="GPS" className="h-8" />{job.place.img}{job.place.place}</div>

        </div>))}
    </div>




  )

}
export default Section;
