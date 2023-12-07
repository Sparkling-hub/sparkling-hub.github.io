import React from 'react';
import type SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({ header, content, image, button, background, id }) => {
  
  return (
    <section className={`flex items-center justify-center relative ${background}`} id={id}>
      <div className='content-section flex  items-center justify-center flex-col justify-center'>
      <div className='max-w-screen-xl items-start '>

        <div className='flex items-center whitespace-normal w-full '>
          <div className='flex justify-center flex-col  '>{header}
            {content}
          </div>

          {!image ? null : <div className='content-image'>  {image}

          </div>}
        </div>

        {button ? <div className='button absolute bottom-20 left-auto'>
          {button}
        </div>
          :
          null
        }

      </div>

      </div>
    </section>




  );
};

export default Section;

// Sparkling
