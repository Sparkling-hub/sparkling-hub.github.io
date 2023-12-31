import Team from "@/components/row-team";
const head = <h2 className="mx-auto my-16 font-5 text-4xl">Why <strong className="text-teal-700">Working With Us?</strong></h2>
const content = (<Team/>
);


const element = {
  header:head,
  content: content,
  curvedClass: 'before:content-curved_dark_without_line_white before:w-full before:absolute  before:top-[-%]',
  background: '', 
  index: 3,
  id: 'team'
};
export default element;
