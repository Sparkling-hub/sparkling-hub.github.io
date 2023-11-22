import Button from "../../components/button";

const header =
  <h1>We <span>build </span>software to <br/> <strong> reach your goals</strong></h1>


const content = <p>Whether you are looking to expand your Development Team, build your idea from scratch,
  or do some good old Research and Development (R&D) you need more than coders, you need problem-solvers.
  Talk to us for seasoned and affordable Software Engineers that add real value to your long-term future.</p>

const image = <img src='/img/section/sectionOne.png' width={3000} />;

const button=   <Button href="/get-in-touch" text="Get in touch" />

const element = {
  content: content,
  header: header,
  image: image,
  button:button
}
export default element