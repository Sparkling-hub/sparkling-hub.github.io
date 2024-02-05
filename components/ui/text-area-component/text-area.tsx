import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  name: string;

  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  checked?: boolean;}

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, value, onChange,checked }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      className={`border border-green-500 rounded-3xl p-4 w-full my-5 h-40 resize-none ${checked?'border-red-500':'border-green-500'}`} 
      onChange={onChange}
    />
  );
};

export default TextArea;