
import StartupsTechnologiesIconList from "@/components/startup-technologies-icon-list"


const header = (
  <div className="m-auto my-20 text-center">
    <h2 className="text-5xl font-light text-white mb-5">
      <span className="text-teal-400 font-medium">Technologies&nbsp;</span>
      We Work With
    </h2>
    <p className="text-white font-light text-xl">
      <span className="font-medium">Front-end,&nbsp;Back-endandDevOps.
      </span>We use the&nbsp;<span className="font-medium">right tools&nbsp;</span>
      for<span className="font-medium">the right job!</span>
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