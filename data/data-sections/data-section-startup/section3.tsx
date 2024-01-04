
import StartupsTechnologiesIconList from "@/components/startup-technologies-icon-list"


const header = (
  <div className="m-auto my-20 text-center">
    <h2 className="text-5xl font-light text-white mb-5">
      <strong className="text-teal-400 font-medium">Technologies</strong>
       We Work With</h2>
    <p className="text-white font-light text-xl"><strong className="font-medium">Front-end, Back-end and DevOps.</strong>We use the 
  <strong className="font-medium">right tools </strong>
  for
  <strong className="font-medium"> the right job!</strong>
    </p>
  </div>
);





const content = <StartupsTechnologiesIconList />


const element = {
  content: content,
  header: header,
  index: 3,
  curvedClass: 'before:content-curved_dark_without_line before:w-full before:absolute',
  background: 'bg-color-primary-dark',
  margin_bottom: 'mb-12'

}
export default element