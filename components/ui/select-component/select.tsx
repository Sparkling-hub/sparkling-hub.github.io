import React, { ChangeEvent } from 'react';
import FormData from '@/interface/IFromData';

interface SelectProps {
  name: string;
  value: string | undefined;
  onChange: any;
  placeholder: string;
  data?: any;
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, placeholder, data }) => {
  return (
    <select
      name={name}
      className="border border-green-500 rounded-3xl p-4 w-full m-5"
      value={value || ''} 
      onChange={onChange}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
    
    </select>
  );
};

export default Select;
