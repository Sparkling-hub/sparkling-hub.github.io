import React from 'react';
import SectionType from '../../interface/section';
import Button from '../button';


const Section: React.FC<SectionType> = ({header, content}) => {
  console.log(header)
  return (
    <div className='flex items-center justify-center'>
    <div className='content-section flex items-center justify-center flex-col '>
      <div>
      {header}</div>
      <div className='flex'>
      {content}
      </div>
<Button/>
      </div>
    </div>
  );
};

export default Section;
