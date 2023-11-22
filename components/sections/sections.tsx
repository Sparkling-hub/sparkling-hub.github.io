import React from 'react';
import type SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({ header, content }) => {
  console.log(header)
  return (
    <div className='flex items-center justify-center'>
      <div className='content-section flex items-center justify-center flex-col justify-center '>

        <div className='flex items-center'>
          <div className='flex justify-center flex-col'>{header}   </div>

          {content}

        </div>
        <Button  href = "/get-in-touch" text = "Get in touch"/>
      </div>
    </div>
  );
};

export default Section;

// Sparkling
