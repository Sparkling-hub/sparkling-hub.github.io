import React, { ChangeEvent } from 'react';

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, value, onChange, id }) => {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-green-500 rounded-3xl p-4 w-full m-5"
    />
  );
};

export default Input;
