import Button from "../../../components/button";
import Careers from "../../../components/careers";


const content =
				<>
					<Careers />
					<h2>
						<span>Want to join </span>
						us but your specific skills aren&rsquo;t listed on an open position?
						<br /> Don&rsquo;t worry! Please send us your details because
						<span>we are always looking for bright talents!</span>
					</h2>
				</>

const button = <Button href={"/contact#form-contact"} text="Get in touch" />
const element = {
	content: content,	
	background: 'bg-teal-50',
	id: "jobs",
	button: button
}
export default element