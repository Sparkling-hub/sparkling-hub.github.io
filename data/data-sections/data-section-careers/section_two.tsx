import Button from "../../../components/button";
import Jobs from "../../../components/jobs";

const header =
	<h3></h3>


const content = <>
					<Jobs />
					<h2>
						<span>Want to join </span>
						<span>us but your specific skills aren&apos;t listed on an open position?<br /> Don&apos;t worry! Please send us your details because</span>
						<span>we are always looking for bright talents!</span>
					</h2>
				</>

const button = <Button href={"/contact#form-contact"} text="Get in touch" />
const element = {
	content: content,
	header: header,
	background: 'bg-teal-50',
	id: "jobs",
	button: button
}
export default element