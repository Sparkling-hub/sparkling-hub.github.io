
import RowTeam from "@/components/team-roles";
const head = <div className="flex flex-col items-center mb-16 m-auto w-fit text-center"><h2 className="font-5 text-4xl m-5">Forge your <strong className="text-teal-600 font-semibold">dream team</strong>!</h2>
 <h3 className="text-xl">Experts <strong className="text-teal-600 font-semibold">dedicated </strong>to their craft and <strong className="text-teal-600 font-semibold">fully committed</strong>  to your project.</h3>
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
