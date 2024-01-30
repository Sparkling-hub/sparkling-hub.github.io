import React, { SyntheticEvent } from 'react';
import axios from "axios";
import FormData from '@/interface/IFromData';
interface InputSubmitProps {
  name: string;
  type: string;

  
  disabled: boolean;
  formData: FormData;
  http: string;
}

const InputSubmit: React.FC<InputSubmitProps> = ({ name, type, disabled, formData, http }) => {
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(http, { formData });
      console.log('Send:', response.data);
    } catch (error) {
      console.error('Send eeror:', error);
    }
  };
  const buttonClass = disabled? 'bg-teal-500 hover:bg-teal-400 ' : 'bg-color-primary-dark';

  return (
    <input
      name={name}
      type={type}
      disabled={!disabled}
      className={`no-underline text-white py-3 px-8  rounded-3xl p-2 w-40 m-auto ${buttonClass}`}
      onClick={handleSubmit}
    />
  );
};

export default InputSubmit;
