import React from 'react';
import type SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({ header, content, image, button, background, id }) => {

  return (
    <section className={`flex items-center justify-center relative bg-${background}`} id={id}>
      <div className='content-section flex   items-start justify-center flex-col justify-center'>

        <div className='flex items-center whitespace-normal w-full '>
          <div className='flex justify-center flex-col w-full'>{header}
            {content}
          </div>

          {!image ? null : <div className='content-image'>  {image}

          </div>}
        </div>

        {button ? <div className='absolute bottom-20 left-0'>
          {button}
        </div>
          :
          null
        }

      </div>


    </section>




  );
};

export default Section;

// Sparkling
