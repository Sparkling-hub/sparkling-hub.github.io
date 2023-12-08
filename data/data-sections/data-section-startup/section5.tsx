
import StartupAssistings from "@/components/startup-assistings"
import StartupStepByStep from "@/components/startup-step-by-step"
import StartupsTechnologiesIconList from "@/components/startup-technologies-icon-list"



const header =
    <h2 className="flex-col items-center justify-center  p-4">
        <div className="flex justify-center text-5xl mb-4">
            
            <span className="color-primary-dark font-bold pb-5">Assisting you</span>
            <span className="text-black font-light mx-4">all the way through</span>
        </div>
        <div className="flex justify-center text-xl">
            <span className="text-center text-black font-normal px-40 pb-20">While the MVP marks the starting line, it is not the finish line. It is the foundational groundwork imperative for a successful future. Our approach in developing an MVP keeps your future in mind and its stability as a core value ensuring a sound foundation that eases subsequent development.

From this point onwards it is on you and your dream to lead the way, we offer our support and guidance, serving as your technological partner or consultant as you navigate the different stages of growth.</span>
        </div>

    </h2>

const content = <StartupAssistings />


const element = {
    content: content,
    header: header,
    curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute before:-mt-curved-startup ',
	background: 'bg-color-primary-light',	
	index: 4,
    
}
export default element