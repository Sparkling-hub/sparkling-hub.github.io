import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import FormData from '@/interface/IFromData';

interface InputSubmitProps {
  name: string;
  type: string;
  disabled: boolean;
  formData: FormData;
  http: string;
}

const InputSubmit: React.FC<InputSubmitProps> = ({ name, type, disabled, formData, http }) => {
  const [result, setError] = useState<any>(''); // Change the type to any

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(http, { formData });
      setError(response.data);
    } catch (error) {
      setError(error || 'An error occurred');
    }
  };

  const buttonClass = disabled? 'bg-teal-500' : 'bg-color-primary-dark';


  return (
    <>
      <input
        name={name}
        type={type}
        disabled={!disabled}
        className={`no-underline text-white py-3 px-8  rounded-3xl p-2 w-40 m-auto ${buttonClass}`}
        onClick={handleSubmit}
      />
      <div className='absolute top-[150%] text-center text-xl w-full font-bold'>
        {typeof result === 'object' ? (
          
          <h3 className='text-red-500'>{result.message || 'An error occurred'}</h3>
        ) : (
    
          <h3 className='text-teal-600 '>{result}</h3>
        )}
      </div>
    </>
  );
};

export default InputSubmit;
