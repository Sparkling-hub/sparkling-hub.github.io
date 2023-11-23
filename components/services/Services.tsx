import React from 'react';
import dataServices from '../../data/data-services'
import IService from '../../interface/service'
import Service from '../service'

const Services: React.FC<IService> = () => {

  //const {services} = dataServices

  return (
    <div className='flex '>
      
	  {dataServices.map((service, index) => (
        <Service key={index} {...service} />
      ))}
      
    </div>
  );
};

export default Services;