

import ConsultingItemList from "@/components/consulting-item-list"


const header =
	<h2 className="flex-col items-center  text-6xl mt-24">
		<div className="flex justify-center">
			<span className="color-primary-light mx-4 font-medium">Customised Solutions</span>
			<span className="text-black "> for Every Project</span>
			<br />
		</div>
		<div className="flex-col justify-center text-center my-8">
			<div className=" mx-4 text-2xl">Understanding that <span className="color-primary-light font-normal">“one size, does NOT fit all”</span>, our Consulting Projects are fully adaptable to meet your needs.</div>
			<div className=" mx-4 text-2xl">Explore some of the <span className="color-primary-light font-normal">challenges we can solve together.</span></div>
			<br />
		</div>
	</h2>

const content = <ConsultingItemList />


const element = {
	content: content,
	header: header,
	// curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute before:-mt-curved-startup ',
	curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute',
	background: 'bg-color-primary-light',
	index: 2,
	padding_bottom: 'pb-40',
	margin_bottom: 'mb-64'
}
export default element