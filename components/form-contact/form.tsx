import React, { ChangeEvent, useState } from "react";
import Input from "../ui/input-component/input";
import TextArea from "../ui/text-area-component/text-area";
import Submit from "../ui/input-sumbit-component";
import Select from "../ui/select-component";
import FormData from "../../interface/IFromData"
import Link from "next/link";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    select: "",
    email: "",
    company: "",
    message: "",
  });

  const [check, setCheck] = useState(false);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([a-z\d])/.exec(email);
    return emailRegex !== null;
};

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setCheck(isValidEmail(value));
    }
  };



  return (

    <form
      method="post"
      id="rec_form"
      action=""
      encType="multipart/form-data"
      className="form flex items-center w-3/4 m-auto relative"

    >

      <div className="flex flex-col w-2/4  m-3">
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
        <Select onChange={handleInputChange} value={formData.select} name="select" placeholder="I am looking for..." />
        <TextArea
          name="message"
          placeholder="Tell us about your project and goals*"
          type="text"
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

      <Link href="mailto:l.arthofer@sparkling.co.com" target="_blank" className="blank  m-10 bg-white rounded-md text-left rounded-lg justify-center flex flex-col h-26 w-2/4 bg-teal-900">
        <div className="p-10 flex justify-between items-center">
          <div>
            <p className="text-3xl text-black font-normal ">Prefer Email?</p>
            <p className="text-2xl text-green-500 mt-5 font-normal">Drop us a line</p>
          </div>
          <div className="flex flex-wrap">
            <svg className="flex  h-10 w-10"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16,21a1,1,0,0,1-.71-.29l-8-8a1,1,0,1,1,1.42-1.42L16,18.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,16,21Z" fill="#008080"></path></svg></div>
        </div>
      </Link>
    </form>

  );
};

export default Form;
