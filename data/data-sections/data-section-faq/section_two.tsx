import Questions from "../../../components/row-questions/row-qustions";
import Button from "../../../components/button"

const header =
  <h3>Here are our most common questions:</h3>


const content = <><Questions/><h3 className="mb-12">Any other burning questions?</h3>
</>
const button= <Button href={"/contact"} text={"Let us know"}/>


const element = {
  content: content,
  header: header,
  curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute',
  background: 'bg-color-primary-light',
  id: "answers",
  button:button
}
export default element
