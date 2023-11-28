import Link from "next/link";
import Questions from "../../../components/row-questions/row-qustions";
import Button from "../../../components/button"

const header =
  <h3>Here are our most common questions:</h3>


const content = <><Questions/><h3>Any other burning questions?</h3>
</>
const button= <Button href={""} text={"Let us know"}/>


const element = {
  content: content,
  header: header,
  background:'teal-50',
  id: "answers",
  button:button
}
export default element