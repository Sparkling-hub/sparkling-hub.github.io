
import StartupsItemList from "@/components/startup-item-list"



const header =
	<h2 className="flex-col items-center  text-6xl mt-24">
		<div className="flex justify-center">
			<span className="color-primary-light mx-4">Your</span> <span className="text-black font-medium">Dream Team</span> <br />
		</div>
		<div className="flex justify-center my-8">
			<span className=" mx-4 text-3xl ">Experts dedicated to their craft and fully committed to your project.</span>  <br />
		</div>
	</h2>

const content = <StartupsItemList />


const element = {
	content: content,
	header: header,
	// curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute before:-mt-curved-startup ',
	curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute',
	background: 'bg-color-primary-light',	
	index: 2,
}
export default element