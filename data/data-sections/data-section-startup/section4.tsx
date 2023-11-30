
import StartupStepByStep from "@/components/startup-step-by-step"
import StartupsTechnologiesIconList from "@/components/startup-technologies-icon-list"



const header =
    <h2 className="flex-col items-center justify-center  p-4">
        <div className="flex justify-center text-5xl mb-4">
            <span className="text-black font-light mx-4">Launching an</span>
            <span className="color-primary-light font-medium pb-5">MVP in 5 simple steps</span>
        </div>
        <div className="flex justify-center text-xl">
            <span className="text-center text-black font-normal px-40 pb-20">Do you have a ground-breaking idea? Want to develop and launch your MVP effectively and affordably? We have got you covered! Our streamlined 5-step process is designed just for that:</span>
        </div>

    </h2>

const content = <StartupStepByStep />


const element = {
    content: content,
    header: header
}
export default element