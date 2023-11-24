
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
        <form method="post" id="rec_form" action="" enctype="multipart/form-data" class="form flex flex-col items-center"    >

            <Input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleInputChange} />
            <Input type="text" name="phone" value={formData.phone} placeholder="Phone number" onChange={handleInputChange}/>
            <Input type="email" name="email" value={formData.email}
        onChange={handleInputChange} placeholder="Email address" />
       <Select onChange={handleInputChange} value={formData.select} name='select' placeholder="Choose course"/>
            <TextArea name="message" placeholder="Write your message here" required=""   value={formData.message}
        onChange={handleInputChange}/>

            <br />

            <Submit type="submit" name="submit" formData={formData}  http={'http://localhost:3033/send-email'}/>

        </form>)
}
export default Form;