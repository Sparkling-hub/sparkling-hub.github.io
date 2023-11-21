import React from 'react';
import SectionType from '../../interface/section';



const Section: React.FC<SectionType> = ({header, content}) => {
  console.log(header)
  return (
    <div>
      {header}
      {content}
    
    </div>
  );
};

export default Section;
