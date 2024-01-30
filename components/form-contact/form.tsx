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
  selectIsValidEmail,

} from '@/store/redusers/FormSliceReduser';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { formData, check } = useSelector(selectForm);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    dispatch(setFormData({
      ...formData,
      [name]: value,
    }));

    if (name === "email") {
      dispatch(setCheck(selectIsValidEmail(value)));
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
        <Input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name*"
          onChange={handleInputChange}
        />
        {check || formData.email.length <= 3 ? null : (
          <p className="absolute bottom-20 text-red-500 font-bold" key={formData.email.length}>
            Invalid Email
          </p>
        )}
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email*"
        />
        <Input
          type="text"
          name="company"
          value={formData.company}
          placeholder="Company"
          onChange={handleInputChange}
        />
        <Select name="select"/>
        <TextArea
          name="message"
          placeholder="Tell us about your project and goals*"
          value={formData.message}
          onChange={handleInputChange}
        />
        <br />
        <Submit
          type="submit"
          name="submit"
          formData={formData}
          disabled={!!(formData.name && check && formData.message)}
          http={"http://localhost:3033/send-form"}
        />
      </div>
      <Link href="mailto:l.arthofer@sparkling.co.com" target="_blank"
        className="blank m-10 bg-white rounded-md text-left rounded-lg justify-center flex flex-col h-26 w-2/5 bg-teal-900 ">
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
