import Button from "../../../components/button";
import Form from "../../../components/form-contact";

const header =
  <h3>Fill in the form below and <span>we will get back to you </span>within 24hours.</h3>


const content = <Form/>


const element = {
  content: content,
  header: header,
  background:'bg-teal-50',
  id:"form-contact"
}
export default element