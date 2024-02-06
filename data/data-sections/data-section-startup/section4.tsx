
import StartupStepByStep from "@/components/startup-step-by-step"



const header =
    <h2 className="p-4">
        <div className=" text-5xl mb-4 text-black font-light text-center pb-5">
            Launching an{" "}
            <span className="text-teal-700 font-medium">MVP in 5 simple steps</span>
        </div>
        <div className="text-center text-black font-normal px-40 pb-20 text-lg">

            Do you have a ground-breaking idea? Want to develop and launch your MVP effectively and affordably? We have got you covered!
            Our streamlined 5-step process is designed just for that:

        </div>

    </h2>

const content = <StartupStepByStep />


const element = {
    content: content,
    header: header,

    background: 'bg-color-primary-light',
    index: 4,

}
export default element