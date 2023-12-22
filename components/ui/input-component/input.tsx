import React, { ChangeEvent } from 'react';

interface InputProps {
  name: string ;
  type: string ;
  placeholder?: string ;
  value: string | number | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-green-500 rounded-3xl p-4 w-full my-5"
    />
  );
};

export default Input;
