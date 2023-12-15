import { useState, useEffect } from 'react';
import dataJobs from '../../data/data-jobs';
import ICheckboxSelect from '@/interface/ICheckboxSelect';




const CheckboxSelect: React.FC<ICheckboxSelect> = ({  id, checked, onChange }) => {


  return (
    <>
        <input className='m-4' id = {id} type="checkbox"  onChange = {onChange} checked= {checked}/>
		    <label className='text-white' htmlFor="html">{id}</label>
    </>
  );
};

export default CheckboxSelect;
