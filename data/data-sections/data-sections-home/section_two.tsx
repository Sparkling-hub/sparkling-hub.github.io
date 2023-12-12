import Services from "@/components/services"


const header =
  <h1 className=" flex items-center justify-center ">
    <span className="color-primary-light mx-4">We </span> <span className="text-black font-black">Provide</span> <br />
  </h1>


const content = <Services />


const element = {
  content: content,
  header: header,
  id: "services",
  index: 2,  
  curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute',
  background: 'bg-color-primary-light', 
}
export default element