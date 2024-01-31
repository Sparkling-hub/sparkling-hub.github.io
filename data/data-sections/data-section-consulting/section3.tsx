

import Button from "@/components/button"
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

const content =
                <>
                    <ConsultingItemList />

                    <div className="flex-col justify-center text-center text-2xl">
                        <p className="color-primary-light text-4xl mt-24 pb-8">And much more:</p>
                        <p className="py-2">Process Improvements</p>
                        <p className="py-2">UI/UX design</p>
                        <p className="py-2">Cybersecurity solutions</p>
                        <p className="py-2">Digital Transformation Planning</p>
                        <p className="py-2">Business idea consultation </p>
                        <p className="mt-20 mb-10"> <Button  href = "/contact" text = "Get in touch"/></p>
                    </div>
                </>



const element = {
    content: content,
    header: header,
   
    background: 'bg-color-primary-light',
    index: 3,
    padding_bottom: 'pb-40',
    margin_bottom: 'mb-64'
}
export default element