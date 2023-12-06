
import StartupsItemList from "@/components/startup-item-list"



const header =
  <h1 className="flex items-center justify-center">
    <span className="color-primary-light mx-4">We </span> <span className="text-black font-black">Provide</span> <br />
  </h1>

const content = <StartupsItemList />


const element = {
  content: content,
  header: header
}
export default element