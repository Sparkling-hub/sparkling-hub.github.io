
import StartupAssistings from "@/components/startup-assistings"

const header =<h2>From Start to Launch</h2>
const content = <StartupAssistings />

const element = {
    content: content,
    header: header,
    curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute',
    background: 'bg-color-primary-light',
    index: 4,

}
export default element