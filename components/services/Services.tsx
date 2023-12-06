import React from 'react';
import dataServices from '../../data/data-services'
import IService from '../../interface/service'
import Service from '../service'

const Services: React.FC<IService> = () => {

  return (

    <div className='flex justify-around'>  
	    {dataServices.map((service, i) => (
          <Service key={i} {...service} />
       ))}
    </div>
  );
};

export default Services;