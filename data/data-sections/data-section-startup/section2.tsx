
import StartupsItemList from "@/components/startup-item-list"



const header =
  <h2 className="flex items-center justify-center text-6xl">
    <span className="color-primary-light mx-4">We </span> <span className="text-black font-medium">Provide</span> <br />
  </h2>

const content = <StartupsItemList />


const element = {
  content: content,
  header: header
}
export default element