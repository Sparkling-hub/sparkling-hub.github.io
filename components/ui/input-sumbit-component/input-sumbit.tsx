import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectForm,
  selectIsValidEmail,
  setCheck,
  setCheckFormByKey


} from '@/store/redusers/FormSliceReduser';


interface InputSubmitProps {
  name: string;
  type: string;
  disabled: boolean;

  http: string;
}

const InputSubmit: React.FC<InputSubmitProps> = ({ name, type, disabled, http }) => {
  const [result, setResult] = useState<any>('');
  const { formData } = useSelector(selectForm);
  const dispatch = useDispatch();
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setCheck(selectIsValidEmail(formData.email)));
    if (disabled && selectIsValidEmail(formData.email)) {
      try {
        const response = await axios.post(http, { formData });
        setResult(response.data);
      } catch (error: any) {
        setResult(<p>{error.message}</p> || <p>An error occurred</p>);
      }
    }
    else {
      const requiredKeys: string[] = ['name', 'email', 'message'];

      const emptyKeys: string[] = requiredKeys
        .filter(key => (formData as any)[key] === '')
        .map(key =>  key);


        {
          emptyKeys.map((key: any) => (
            dispatch(setCheckFormByKey({ key: key, value: 'Fill in the following fields:' }))
          ))
        }
       
     
      
    };
  }

  const buttonClass = disabled && selectIsValidEmail(formData.email) ? 'bg-teal-500' : 'bg-color-primary-dark';

  return (
    <>
      <input
        name={name}
        type={type}

        className={`no-underline text-white py-3 px-8  rounded-3xl p-2 w-40 m-auto ${buttonClass}`}
        onClick={handleSubmit}
      />
      <div className='absolute top-[150%] text-center text-xl w-full font-bold'>
        {typeof result === 'object' || result === '' ? (

          <h3 className='text-red-500'>{result}</h3>
        ) : (

          <h3 className='text-teal-600 '>{result}</h3>
        )}
      </div>
    </>
  );
};

export default InputSubmit;

