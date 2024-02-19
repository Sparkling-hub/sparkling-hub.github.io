

import React from 'react';

interface JobInfoProps {
  title: string;
  content: string[];
}

const JobInfo: React.FC<JobInfoProps> = ({ title, content }) => {
  return (
    <div className="my-10">
         <h2 className='text-2xl'>{title}:</h2>
      <p className="mx-1">
      {content.map((requirement, index) => (
    <li className="">{requirement}</li>
  ))}
      </p>
    </div>
  );
};

export default JobInfo;
