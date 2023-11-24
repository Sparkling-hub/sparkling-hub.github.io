
import { React, useState } from "react";
import Input from "../ui/input-component/input";
import TextArea from "../ui/text-area-component/text-area";
import Submit from "../ui/input-sumbit-component";
import Select from "../ui/select-component";

const Form = () => {

   
        const [formData, setformData] = useState({
            name: '',
            phone: '',
            email: '',
            message:''

        }); 
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
       
            setformData({
              ...formData,
              [name]: value,
            });
          };
      
    return (
        <form method="post" id="rec_form" action="" enctype="multipart/form-data" class="form flex flex-col items-center w-2/4 p-5 m-auto"     >

            <Input type="text" name="name" value={formData.name} placeholder="Full Name*" onChange={handleInputChange} />
      
            <Input type="email" name="email*" value={formData.email}
            
        onChange={handleInputChange} placeholder="Email*" />
              <Input type="text" name="Company" value={formData.phone} placeholder="Company" onChange={handleInputChange}/>
       <Select onChange={handleInputChange} value={formData.select} name='select' placeholder="I am looking for..."/>
            <TextArea name="message" placeholder="Tell us about your project and goals" required=""   value={formData.message}
        onChange={handleInputChange}/>

            <br />

            <Submit type="submit" name="submit" formData={formData}  http={'http://localhost:3033/send-email'}/>

        </form>)
}
export default Form;