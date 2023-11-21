import React from 'react';
import type SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({ header , content, image }) => {
  console.log(header)
  return (
    <div className='flex items-center justify-center'>
      <div className='content-section flex   items-start justify-center flex-col justify-center '>

          <div className='flex items-center whitespace-normal'>
          <div className='uppercase flex justify-center flex-col'>{header}   
          {content}
          </div>
    
          {image }
          
        </div>
        <div className='absolute bottom-20 left-0'>
        <Button/>
        </div>
      </div>
    </div>
  );
};

export default Section;
