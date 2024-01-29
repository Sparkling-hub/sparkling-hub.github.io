import Button from "../../../components/button";
import Careers from "../../../components/careers";


const content =
	<>
		<Careers />
		<h2 className="text-xl text-center mt-12">
			<span>Want to join </span>
			us but your specific skills aren&rsquo;t listed on an open position?
			<br /> 
			Don&rsquo;t worry! Please send us your details because
			<span> we are always looking for bright talents!</span>
		</h2>
	</>

const button = <div className="flex justify-center m-auto"><Button href={"/contact#form-contact"} text="Get in touch" /></div>
const element = {
	content: content,

  	background: 'bg-color-primary-light',
	id: "jobs",
	button: button
}
export default element