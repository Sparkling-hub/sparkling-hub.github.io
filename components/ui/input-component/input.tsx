import React, { ChangeEvent } from 'react';

interface InputProps {
  name: string ;
  type: string ;
  placeholder?: string ;
  value: string | number | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
checked?: boolean;
}

import { useDispatch, useSelector } from 'react-redux';
import {
  selectForm,



} from '@/store/redusers/FormSliceReduser';

const Input: React.FC<InputProps> = ({ name, type, placeholder, value, onChange,checked }) => {
  const { formData } = useSelector(selectForm);

  if(name=='email'||name=='messege'||name=='name')

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border  rounded-3xl p-4 w-full my-5 ${ checked ? 'border-red-500':'border-green-500' }`}
    />
  );
};

export default Input;
