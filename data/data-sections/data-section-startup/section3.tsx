
import StartupsTechnologiesIconList from "@/components/startup-technologies-icon-list"



const header =
  <h2 className="flex-col items-center justify-center p-4">
    <div className="flex justify-center text-5xl mb-4">
        <span className="color-primary-light font-medium mx-4">Technologies</span> 
        <span className="text-white font-light">We Work With</span>
    </div>
    <div className="flex justify-center text-xl">
        <span className="text-white font-normal ">Front-end, Back-end and DevOps;</span> 
        <span className="text-white font-light mx-2">We use the</span>  
        <span className="text-white font-normal ">right tools for the right job!</span>
    </div>
    
  </h2>

const content = <StartupsTechnologiesIconList />


const element = {
  content: content,
  header: header,  
  index: 3,  
  curvedClass: 'before:content-curved_dark_without_line before:w-full before:absolute before:-mt-240',
	background: 'bg-color-primary-dark', 
	margin_bottom: 'mb-12',
  padding_bottom: "pb-12"

}
export default element