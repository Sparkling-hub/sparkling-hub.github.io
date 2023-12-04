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

  const buttonClass = disabled ? 'active' : 'disabled';

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      
      className="no-underline text-white py-3 px-8 bg-gradient-to-r from-teal-900 to-teal-300 rounded-3xl p-2 w-40"
      onClick={handleSubmit}
    />
  );
};

export default InputSubmit;
