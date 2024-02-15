import Button from "../../../components/button";

const header = (
  <h1 className="text-5xl my-4 leading-12 lg:leading-[100px]">
    We<span className="color-primary-light mx-1">build</span>software to
    <br className="hidden lg:block"/>
    <strong className="text-teal-800  font-bold uppercase "> reach your goals</strong>
  </h1>
);


const content = (
  <p className="text-xl">
  
    Whether you are looking to expand your Development Team, build your idea
    from scratch, or do some good old Research and Development (R&D) you need
    more than coders, you need problem-solvers. Talk to us for seasoned and
    affordable Software Engineers that add real value to your long-term future.
  </p>
);

const image = <img src="/img/section/sectionHome.png" className="lg:w-auto w-full" alt='sectionOne' />;

const button = <Button href="/contact" text="Get in touch" />;
const element = {
  content: content,
  header: header,
  index: 1,
  image: image,
  button: button,
};
export default element;
