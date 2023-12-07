
import StartupsTechnologiesIconList from "@/components/startup-technologies-icon-list"



const header =
  <h2 className="flex-col items-center justify-center bg-emerald-900 p-4">
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
}
export default element