import Button from "@/components/button";
import Card from '@/components/software'

const header =
<div className="text-center mt-12 mb-8">
    <h2 className="text-4xl">From <strong className="text-teal-500 font-bold">Start</strong> to <strong className="font-bold text-teal-500">Launch</strong></h2>
    <p className="text-center text-xl">Unlock the potential of your team in 4 simple steps:</p>
</div>
const content =
<Card/>

const button = <div className="m-16"><Button href="/contact#form-contact" text="Let’s get started"/></div>;
const element = {
    content: content,
    header: header,
    curvedClass: 'before:content-curved_dark_with_line_white before:w-full before:absolute',

    index: 3,
    margin_bottom: 'mb-12',
    button:button
}
export default element