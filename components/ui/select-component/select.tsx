import React, { ChangeEvent } from 'react';


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
      className={`border border-green-500 rounded-3xl p-4 w-full my-5 ${value==''? "text-gray-400 ":""}`}
      value={value || ''} 
      onChange={onChange}
    >
      <option value={placeholder}>
        {placeholder}
      </option>
    
    </select>
  );  
};

export default Select;
