import Button from "@/components/button";
import Card from '@/components/software'

const header =
<div className="text-center mt-12 mb-8">
    <h2 className="text-5xl m-4">From <strong className="text-teal-500 font-bold">Start</strong> to <strong className="font-bold text-teal-500">Launch</strong></h2>
    <p className="text-center text-xl">Unlock the potential of your team in <strong className="text-teal-500 font-bold">4 simple steps:</strong> </p>
</div>
const content =
<Card/>

const button = <div className="m-16"><Button href="/contact#form-contact" text="Let’s get started"/></div>;
const element = {
    content: content,
    header: header,


    index: 3,
    margin_bottom: 'mb-12',
    button:button
}
export default element