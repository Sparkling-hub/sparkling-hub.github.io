import Button from "../../../components/button";




const content = (<div>

  <p className="leading-8 my-3 text-center">

    Buried under a mountain of development tasks and the finish line seems unattainable?
 
    <br /> <strong className="font-semibold text-teal-200">   Alleviate the bottleneck with skilled engineers from our expert teams!</strong>
  </p></div>
);


const element = {
  content: content,
  curvedClass: 'before:content-curved_white_without_line before:w-full before:absolute  before:top-[-70%]',
  background: 'bg-color-primary-light', 
  index: 1,
  id: 'team'
};
export default element;
