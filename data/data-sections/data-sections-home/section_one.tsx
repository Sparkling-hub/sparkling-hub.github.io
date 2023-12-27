import Button from "../../../components/button";

const header = (
  <h1 className="section_one">
    <div>We<span className="color-primary-light mx-4">build</span>software to</div> 
    <br />
    <strong className="s2-uppercase"> reach your goals</strong>
  </h1>
);


const content = (
  <p>
    Whether you are looking to expand your Development Team, build your idea
    from scratch, or do some good old Research and Development (R&D) you need
    more than coders, you need problem-solvers. Talk to us for seasoned and
    affordable Software Engineers that add real value to your long-term future.
  </p>
);

const image = <img src="/img/section/sectionOne.png" className="w-full" alt='sectionOne' />;
const button = <Button href="/contact" text="Get in touch" />;
const element = {
  content: content,
  header: header,
  index: 1,
  image: image,
  button: button,
};
export default element;
