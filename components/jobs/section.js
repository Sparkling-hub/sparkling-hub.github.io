import React, { useState, useEffect } from 'react';
import gps from './image/gps.png'
import dataJobs from '../../data/data-jobs'
import Link from 'next/link';
import Button from '../ui/circle-button';
import JobsFiltre from './filters-jobs/section'


function areElementsUnique(arr) {
  const seen = new Set();
  arr.filter((item) => {
    const value = item.bid.props.children;
    return seen.has(value) ? false : seen.add(value);
  })
  return [...seen];
}


const Section = () => {
  const [selectedBid, setSelectedBid] = useState(null);
  const uniqueBidsSet = (areElementsUnique(dataJobs));


  return (<>

    <div className="flex flex-wrap m-auto w-full">

      <div className={`m-6 w-full l border rounded cursor-pointer text-lg border-none bg-slate-100 rounded-2xl`}>
        {uniqueBidsSet.map((bid, index) => (


          <button className={`no-underline text-white py-1 px-8 ${bid==selectedBid ? 'bg-gradient-to-r from-teal-900 to-teal-300' :''} rounded-3xl`} key={index} onClick={() => {bid==selectedBid ?setSelectedBid(null): setSelectedBid(bid) }}>
            {bid}
          </button>


        ))}
      </div>
      <JobsFiltre dataJobs={dataJobs} filter={selectedBid} />
    </div>
  </>



  )

}
export default Section;
