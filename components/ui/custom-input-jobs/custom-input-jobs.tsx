import React, { ChangeEvent, useState  } from 'react';

interface InputProps {
  name: string ;
  type: string ;
  placeholder?: string ;
  value: string | number | undefined;
  id:string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;

}



const Input: React.FC<InputProps> = ({ name, id,type, placeholder, value , handleSearchChange}) => {

  return (
    <input
      name={name}
      type={type}
        id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleSearchChange}
      className="w-full p-2 placeholder-teal-800 focus:outline-none bg-color-primary-medium focus:bg-color-primary-medium focus:bg-color-primary-medium"
    />
  );
};

export default Input;
