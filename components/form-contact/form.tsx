import React, { ChangeEvent } from "react";
import Input from "../ui/input-component/input";
import TextArea from "../ui/text-area-component/text-area";
import Submit from "../ui/input-sumbit-component";
import Select from "../ui/select-component";

import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import {
  selectForm,
  setFormData,
  setCheck,

  setCheckFormByKey
} from '@/store/redusers/FormSliceReduser';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { formData, check, checkForm } = useSelector(selectForm);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    dispatch(setFormData({
      ...formData,
      [name]: value,
    }));

    dispatch(setCheckFormByKey({ key: name as any, value: '' }));

    if (name === "email") {
      dispatch(setCheck(null));
    }

  };

  return (
    <form
      method="post"
      id="rec_form"
      action=""
      encType="multipart/form-data"
      className="form flex items-center w-full m-auto relative"
    >
      <div className="flex flex-col w-3/5 m-3">
        <div className="relative">
          {checkForm.name.length ? <p className="absolute top-[-5%] text-red-500 font-bold ml-4">Fill in the  fields:</p> : ''}
          <Input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full Name*"
            onChange={handleInputChange}
            checked={checkForm.name.length>0}
          />  </div>
        <div className="relative">
          {checkForm.email.length || check===false ? (
            check === false && (
              <p className="absolute top-[-5%] text-red-500 font-bold ml-4">
                {!checkForm.email.length ? 'Invalid Email' : checkForm.email}
              </p>
            )
          ) : ""}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email*"
            checked={  check === false && checkForm.email.length>0 || check===false}
          />
        </div>
        <Input
          type="text"
          name="company"
          value={formData.company}
          placeholder="Company"
          onChange={handleInputChange}
         
        />
        <Select name="select"
          value={formData.select}
          onChange={handleInputChange} />
        <div className="relative">
          {checkForm.message.length ? <p className="absolute top-[-5%] text-red-500 font-bold ml-4">Fill in the  fields:</p> : ''}
          <TextArea
            name="message"
            placeholder="Tell us about your project and goals*"
            value={formData.message}
            onChange={handleInputChange}
            checked={checkForm.message.length>0}
          />
        </div>
        <br />
        <div className="w-fit m-auto relative">
          <Submit
            type="submit"
            name="submit"

            disabled={!!(formData.name && formData.email && formData.message)}
            http={"http://localhost:3033/send-form"}
          />
        </div>
      </div>
      <Link href="mailto:l.arthofer@sparkling.co.com" target="_blank"
        className="blank m-10 bg-white rounded-md text-left rounded-lg justify-center flex flex-col h-26 w-2/5 bg-teal-900">
        <div className="p-6 flex justify-between items-center pr-1">
          <div>
            <p className="text-3xl text-black font-normal">
              Prefer Email?
            </p>
            <p className="text-2xl text-green-500 mt-5 font-normal">
              Drop us a line
            </p>
          </div>
          <div className="flex flex-wrap">
            <svg className="flex h-10 w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,21a1,1,0,0,1-.71-.29l-8-8a1,1,0,1,1,1.42-1.42L16,18.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,16,21Z"
                fill="#008080">
              </path>
            </svg>
          </div>
        </div>
      </Link>
    </form>
  );
};

export default Form;
