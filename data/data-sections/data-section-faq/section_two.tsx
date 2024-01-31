import Questions from "../../../components/row-questions/row-qustions";
import Button from "../../../components/button"

const header =
  <h3 className="text-center text-4xl text-teal-600 mb-8">Here are our most common questions:</h3>


const content = <><Questions/><h3 className="text-center text-4xl text-teal-600 mt-8">Any other burning questions?</h3>

</>
const button= <Button href={"/contact"} text={"Let us know"}/>

const element = {
  content: content,
  header: header,

  background: 'bg-color-primary-light',
  id: "answers",
  button:button
}
export default element
