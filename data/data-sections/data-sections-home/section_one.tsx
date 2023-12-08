import Button from "../../../components/button";

const header = (
  <h1 className="section_one">
    We <span className="color-primary-light">build </span>software to <br />{" "}
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
const button = <Button href="/get-in-touch" text="Get in touch" />;
const element = {
  content: content,
  header: header,
  image: image,
  button: button,
  padding_bottom: "pb-40 custom-pb-60"
 
};
export default element;
