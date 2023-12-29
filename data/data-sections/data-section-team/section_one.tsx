import Button from "../../../components/button";

const header = (
  <h1 className="section_one">
   Team build <strong className="s2">Augmentation</strong>


  
  </h1>
);


const content = (<div>
  <strong className="s2 text-2xl"> Level up your projects with enhanced teams</strong>   <br />
  <p className="leading-8 my-3">    
 
 
  
      Enhance your development efforts by integrating seasoned developers.
      At Sparkling, our skilled engineers smoothly integrate into your project, empowering you to excel at what you do best.
      Experience a significant boost in production and enjoy peace of mind
    </p></div>
);

const image = <img src="/img/team/logo.png" className="" alt='sectionOne' />;

const element = {
  content: content,
  header: header,
  index: 1,
  image: image,
  id: 'team'
};
export default element;
