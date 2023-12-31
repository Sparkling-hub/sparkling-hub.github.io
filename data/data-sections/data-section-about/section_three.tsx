
import About from "@/components/row-aboutus"
const head= <h2 className="text-teal-500 m-auto mt-20 mb-12 text-4xl">Our <strong className="text-teal-800 font-bold">Core Principles</strong></h2>
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