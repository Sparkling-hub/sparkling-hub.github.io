import Team from "@/components/row-team";
const head = <h2 className="mx-auto my-16 font-5 text-4xl font-light w-fit m-auto">Why <strong className="text-teal-600 font-medium">Working With Us?</strong></h2>
const content = (<Team/>
);


const element = {
  header:head,
  content: content,
  background: '', 
  index: 3,
  id: 'team'
};
export default element;
