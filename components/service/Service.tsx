import React from 'react';
// import services from '../../data/data-services'
import IService from '../../interface/service'


const Service: React.FC<IService> = ({content, header, image, button}) => {

  
  console.log(header)
  
  // debugger
  return (
    <div className='flex-col'>
      <div className='service_icon'>{image} </div>
      {header}
      {content}
      {button}
    </div>

  );
};

export default Service;

