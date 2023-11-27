import React from 'react';
import type SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({ header, content, image, button }) => {
  console.log(header)
  return (


    <div className='flex items-center justify-center relative'>
      <div className='content-section flex   items-start justify-center flex-col justify-center'>

        <div className='flex items-center whitespace-normal'>
          <div className='flex justify-center flex-col'>{header}
            {content}
          </div>

          {image}

        </div>
        <div className='absolute bottom-20 left-0'>
          {button}
        </div>
      </div>


    </div>




  );
};

export default Section;

// Sparkling
