import React, { useState } from "react";
import Input from "../ui/input-component/input";
import TextArea from "../ui/text-area-component/text-area";
import Submit from "../ui/input-sumbit-component";
import Select from "../ui/select-component";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    select: "",
    email: "",
    company: "",
    message: "",
  });

  const [check, setCheck] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
   
      setCheck(isValidEmail(value));
      console.log(formData.email.length>= 3)
    }
  };

  return (
    <form
      method="post"
      id="rec_form"
      action=""
      encType="multipart/form-data"
      className="form flex flex-col items-center w-2/4 p-5 m-auto relative"
    >
      <Input
        type="text"
        name= 'name'
        value={formData.name}
        placeholder="Full Name*"
        onChange={handleInputChange}
      />
      {check || formData.email.length<= 3 ? null : (
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
        required=""
        value={formData.message}
        onChange={handleInputChange}
      />

      <br />

      <Submit
        type="submit"
        name="submit"
        formData={formData}
        disabled={(formData.name && check && formData.message)}
        http={"http://localhost:3033/send-form"}
      />
    </form>
  );
};

export default Form;
