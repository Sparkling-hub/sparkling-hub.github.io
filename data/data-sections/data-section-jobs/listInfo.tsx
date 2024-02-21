

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
interface JobInfoProps {
  title: string;
  content: string[];
}

const JobInfo: React.FC<JobInfoProps> = ({ title, content }) => {
  return (
    <div className="my-10">
         <h2 className='text-2xl'>{title}:</h2>
      <p className="mx-1">
      {content.map((requirement) => (
    <li key={uuidv4()} className="">{requirement}</li>
  ))}
      </p>
    </div>
  );
};

export default JobInfo;
