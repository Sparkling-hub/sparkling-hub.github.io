import Services from "@/components/services"

const header =
  <h1 className="m-auto w-fit  text-teal-500 my-16">

Explore our <strong className="text-teal-800 font-medium">Solutions</strong> 
  </h1>

const content = <Services />

const element = {
  content: content,
  header: header,
  id: "services",
  index: 2,

  background: 'bg-color-primary-light',
}
export default element