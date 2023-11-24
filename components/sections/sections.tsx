import React from 'react';
import type SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({ header, content, image, button }) => {

  return (


    <div className='flex items-center justify-center relative'>
      <div className='content-section flex   items-start justify-center flex-col justify-center'>

        <div className='flex items-center whitespace-normal w-full'>
          <div className='flex justify-center flex-col w-full'>{header}
            {content}
          </div>

            {!image?null:<div className='content-image'>  {image}

          </div>}
        </div>
        {!button? null:<div className='absolute bottom-20 left-0'>
        {button}
        </div>}
      </div>


    </div>




  );
};

export default Section;

// Sparkling
