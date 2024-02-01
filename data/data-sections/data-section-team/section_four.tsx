
import RowTeam from "@/components/team-roles";
const head = <div className="flex flex-col items-center m-14 text-center font-light"><h2 className="font-5 text-5xl m-5">Forge your <strong className="text-teal-500 font-semibold">dream team</strong>!</h2>
 <h3 className="text-2xl font-light">Experts <strong className="text-teal-500 font-semibold">dedicated </strong>to their craft and <strong className="text-teal-500 font-semibold">fully committed</strong>  to your project.</h3>
 </div>
const content = (<RowTeam/>
);


const element = {
  header:head,
  content: content,

  index: 3,
  id: 'team'
};
export default element;
