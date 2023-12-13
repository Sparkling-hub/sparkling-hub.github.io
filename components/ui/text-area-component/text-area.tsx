import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  name: string;

  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      
      className="border border-green-500 rounded-3xl p-4 w-full my-5 h-40 resize-none"
      onChange={onChange}
    />
  );
};

export default TextArea;
