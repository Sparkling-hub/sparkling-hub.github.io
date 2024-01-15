import React from 'react';
import ICheckboxSelect from '@/interface/ICheckboxSelect';
import { useDispatch, useSelector } from 'react-redux';
import { selectCareers, setCheckboxData } from '@/store/redusers/CareersSliceReduser';
import { ChangeEvent } from 'react';
import { RootState } from '@reduxjs/toolkit/query';
import { get } from '../careers/search_function/search_function';

const CheckboxSelect: React.FC<ICheckboxSelect> = ({ id, checked,name }) => {

  const dispatch = useDispatch();
  const {

		activeIds,
	  
	  } = useSelector(selectCareers);
	

  const handleParamsChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('id ' + id.value);
    const result = get(activeIds, name);
    
    const updatedData = {
      name,
      value: [...result, id.value],
    };
    dispatch(setCheckboxData(updatedData));
  };


  return (
<div className='relative'>
    <input id={id.value} type="checkbox"  className="opacity-0 w-full absolute h-full" onChange={handleParamsChange}/>

      <input className='m-4 h-full ' type="checkbox"  onChange={handleParamsChange} checked={checked}  />  
      <label className='text-white' htmlFor={id.value}>
        <span className='mr-4'>{id.value}</span>
        <span> {id.count}</span>
      </label>
    
      </div>

  );
};

export default CheckboxSelect;

