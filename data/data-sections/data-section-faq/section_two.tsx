import Questions from "../../../components/row-questions/row-qustions";
import Button from "../../../components/button"

const header =
  <h3 className="text-center text-4xl text-teal-600 mb-8">Here are our most common questions:</h3>


const content = <><Questions/><h3 className="text-center text-4xl text-teal-600 mt-8">Any other burning questions?</h3>

</>

const button= <div className="w-fit m-auto"><Button href={"/contact"} text={"Let us know"}/></div>


const element = {
  content: content,
  header: header,


  id: "answers",
  button:button
}
export default element
