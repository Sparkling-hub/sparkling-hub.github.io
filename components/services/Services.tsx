import React from 'react';
import services from '../../data/data-services'
import IService from '../../interface/service'

const Services: React.FC<IService> = () => {

  
  if(services){
    console.log(services)
    debugger
  }
  
  return (
    <>
      {/* services? 
      {services.map((item, index) => ( 
        <Service id = {index} item = {item}/> ))
      } 
      :
      {

      } */}
    </>
  );
};

export default Services;