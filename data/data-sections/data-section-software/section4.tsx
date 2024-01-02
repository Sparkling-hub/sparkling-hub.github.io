import Button from "@/components/button";


const header =<h2>From Start to Launch</h2>

const content =<p>Unlock the potential of your team in 4 simple steps:</p>

const button = <Button href="/contact" text="Let’s get started" />;
const element = {
    content: content,
    header: header,
    curvedClass: 'before:content-curved_white_without_line before:w-full before:absolute',
    background: 'bg-color-primary-light',
    index: 4,
    margin_bottom: 'mb-12',
    button:button
}
export default element