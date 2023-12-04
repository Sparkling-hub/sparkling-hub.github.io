import React, { SyntheticEvent } from 'react';
import axios from "axios";

interface InputSubmitProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  formData: any;
  http: string;
}

const InputSubmit: React.FC<InputSubmitProps> = ({ name, type, placeholder, value, disabled, formData, http }) => {
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(http, { formData });
      console.log('Send:', response.data);
    } catch (error) {
      console.error('Send eeror:', error);
    }
  };
  console.log(disabled)
  const buttonClass = disabled? 'bg-gradient-to-r from-teal-900 to-teal-300' : 'bg-teal-900';

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={!disabled}
      className={`no-underline text-white py-3 px-8  rounded-3xl p-2 w-40 ${buttonClass}`}
      onClick={handleSubmit}
    />
  );
};

export default InputSubmit;
