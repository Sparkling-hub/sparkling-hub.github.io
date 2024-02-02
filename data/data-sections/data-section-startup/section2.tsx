
import StartupsItemList from "@/components/startup-item-list"



const header =
	<h2 className="text-5xl">
		<div className="flex justify-center">
			<span className="color-primary-light mx-4">Your</span>
			<span className="text-black font-medium">Dream Team</span>
			<br />
		</div>
		<div className="flex justify-center my-8">
			<span className=" mx-4 text-3xl ">Experts dedicated to their craft and fully committed to your project.</span>
			<br />
		</div>
	</h2>

const content = <StartupsItemList />


const element = {
	content: content,
	header: header,	

	background: 'bg-color-primary-light',
	index: 2,
	padding_bottom: 'pb-40',
	margin_bottom: 'mb-64'
}
export default element