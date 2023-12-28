
import About from "@/components/row-aboutus"
const head= <h2 className="text-teal-500">Our <strong className="s3">Core Principle</strong></h2>
const content =
  <About/>


const element = {
  header: head,
  content:content,
  curvedClass: 'before:content-curved_white_with_line_bottom before:w-full before:absolute before: bottom-10',
  background: '', 
  id: "principle"

}
export default element