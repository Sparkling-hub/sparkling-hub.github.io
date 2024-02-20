
import IJob from "@/interface/IJob";
import Button from "@/components/button";
import List from "./listInfo";
import Link from "next/link";
interface JobComponentProps {
  job: IJob;
}
const JobComponent: React.FC<JobComponentProps> = ({job}) => {


  return (
    
    <div className="m-14 max-w-[1920px] pb-14">
      <Link href={`/form/${job.slug}`} className="flex items-center text-xl  mb-4"> <img src="/img/jobs/arrowBack.png" alt="back"  className="h-4"/> Explore all vacancies</Link>
     <h1 className="text-5xl mb-6 mx-1 ">{job.head}</h1>
     <p className="text-xl pb-8">
   {job.workMode}, {job.location}, {job.experienceHTML}
  </p>
  <Button href={""} text={" Apply "} />
      <div className="my-10">
        <h2 className="text-2xl">Role overview:</h2>
      <p className="">
      {job.overview}
      </p>

      <List title="Core Responsibilities" content= {job.coreResponsibilities}/>
      <List title="Skills Requirements" content= {job.skillsRequirements}/>
      <List title="Additional Qualifications" content= {job.additionalQualifications}/>
      <List title="Benefits" content= {job.benefits}/>
    
  
      </div>

    </div>
  );
};

export default JobComponent;

