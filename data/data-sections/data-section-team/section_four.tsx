import Team from "@/components/row-team";
import RowTeam from "@/components/team-roles";
const head = <h2 className="m-auto font-5 text-4xl">Why <strong className="text-teal-700">Working With Us?</strong></h2>
const content = (<RowTeam/>
);


const element = {
  header:head,
  content: content,
  curvedClass: 'before:content-curved_white_without_line before:w-full before:absolute  before:top-[-22%]',
  background: 'bg-color-primary-light', 
  index: 3,
  id: 'team'
};
export default element;
