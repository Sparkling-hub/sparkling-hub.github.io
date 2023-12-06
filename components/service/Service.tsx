import React from 'react';
// import services from '../../data/data-services'
import IService from '../../interface/service'


const Service: React.FC<IService> = ({content, header, image, button}) => {
  
  return (
    <div className='flex-col max-w-sm pb-40'>
      <div className='service_icon'>{image} </div>
      {header}
      {content}
      {button}
    </div>

  );
};

export default Service;

