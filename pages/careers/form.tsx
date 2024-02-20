
import React, { ChangeEvent } from "react";
import Input from "../../components/ui/input-component/input";
import TextArea from "../../components/ui/text-area-component/text-area";
import Submit from "../../components/ui/input-sumbit-component";
import Select from "../../components/ui/select-component";
import MainLayout from '../../layouts/MainLayuout';
import Jobs from '../../data/data-jobs';
import InfoJob from '../../data/data-sections/data-section-jobs/infoJob'

import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import {
  selectForm,
  setFormData,
  setCheck,

  setCheckFormByKey
} from '@/store/redusers/FormSliceReduser';
import { useRouter } from 'next/router';



const Faq = () => {
	
	const dispatch = useDispatch();
	const { formData, check, checkForm } = useSelector(selectForm);
    const router = useRouter();
	console.log(router)
  const { id } = router.query;
  const job = Jobs.find(job => job.slug === id )
 

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
<MainLayout>
		{job?

			  <div className="m-14 max-w-[1920px] pb-14">
      <Link href='/careers' className="flex items-center text-xl  mb-4"> <img src="/img/jobs/arrowBack.png" alt="back"  className="h-4"/> Explore all vacancies</Link>
     <h1 className="text-5xl mb-6 mx-1 ">{job.head}</h1>
     <p className="text-xl pb-8">
   {job.workMode}, {job.location}, {job.experienceHTML}
  </p>  
  
			<form action="">
<div className="flex flex-col w-full sm:w-4/5 lg:w-3/5 m-3">
  
  
  <Input
	type="text"
	name="name"
	value={formData.name}
	placeholder="Full Name*"
	onChange={handleInputChange}
	checked={checkForm.name.length > 0}
  />

  <Input
	type="email"
	name="email"
	value={formData.email}
	onChange={handleInputChange}
	placeholder="Email*"
	checked={check === false && checkForm.email.length > 0 || check === false}
  />

  <Input
	type=""
	name="phone"
	value={formData.phone}
	placeholder="Phone number*"
	onChange={handleInputChange}

  />
    <Input
	type="text" name="linkId"
	value={formData.linkId}
	onChange={handleInputChange}
	placeholder="Linkedin" />
	


  <TextArea
	name="message"
	placeholder="Motivation letter"
	value={formData.message}
	onChange={handleInputChange}
	checked={checkForm.message.length > 0}
  />

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
  className="blank m-10 bg-white rounded-md text-left rounded-lg justify-center flex flex-col h-26 w-[300px] bg-teal-900">
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
</div>:''}</MainLayout>

	);
};

export default Faq;