import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('Promise is pending...!')); 
          }, 2000);
        }),
        {
          pending: 'Sending a message...', 
        }
      );
      try {
        const response = await axios.post(http, { formData });
        setResult(response.data);
        toast.success('Form submitted successfully!', {
       
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
      } catch (error: any) {
     
        toast.error(<p>{error.message ||"An error occurred"}</p>, {
     
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
      }
    } else {
      const requiredKeys: string[] = ['name', 'email', 'message'];
      requiredKeys
        .filter(key => (formData as any)[key] === '')
        .map(key => { dispatch(setCheckFormByKey({ key: key, value: 'Fill in the following fields:' })) });
    }
  }

  const buttonClass = disabled && selectIsValidEmail(formData.email) ? 'bg-teal-500' : 'bg-color-primary-dark';

  return (
    <>
      <input
        name={name}
        type={type}
        className={`no-underline text-white py-3 px-8 rounded-3xl p-2 w-40 m-auto ${buttonClass}`}
        onClick={handleSubmit}
      />
      <div className='absolute top-[150%] text-center text-xl w-full font-bold'>
        <ToastContainer
        className="mt-[5%]"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </>
  );
};

export default InputSubmit;
