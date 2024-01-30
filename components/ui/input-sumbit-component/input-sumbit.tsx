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
  const [result, setResult] = useState<any>('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (disabled) {
      try {
        const response = await axios.post(http, { formData });
        setResult(response.data);
      } catch (error: any) {
        setResult(<p>{error.message}</p> || <p>An error occurred</p>);
      }
    }
    else {
      const requiredKeys:string[] = ['name', 'email', 'message'];

 
      const emptyKeys: string[] = requiredKeys
        .filter(key => (formData as any)[key] === '')  
        .map(key => key);

      if (emptyKeys.length > 0) {
        setResult(
          <div className='w-fit'>
           <h3 className='text-'>Fill in the following fields:</h3>
            {emptyKeys.map((key) => (
              <React.Fragment key={key}>
                 '{key}'{' '}
              
              </React.Fragment>
            ))}
          </div>
        );
        return;
      }
    };}

    const buttonClass = disabled ? 'bg-teal-500' : 'bg-color-primary-dark';


    return (
      <>
        <input
          name={name}
          type={type}

          className={`no-underline text-white py-3 px-8  rounded-3xl p-2 w-40 m-auto ${buttonClass}`}
          onClick={handleSubmit}
        />
        <div className='absolute top-[150%] text-center text-xl w-full font-bold'>
          {typeof result === 'object' || result===''  ? (

            <h3 className='text-red-500'>{result || 'An error occurred'}</h3>
          ) : (

            <h3 className='text-teal-600 '>{result}</h3>
          )}
        </div>
      </>
    );
  };

export default InputSubmit;
