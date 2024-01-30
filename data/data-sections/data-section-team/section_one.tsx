

const header = (
  <h1 className="text-5xl text-teal-700 font-light mb-10">
   Team build <strong className="s2 text-teal-800">Augmentation</strong>


  
  </h1>
);


const content = (<div>
  <strong className="s2 text-2xl  text-teal-700"> Level up your projects with enhanced teams</strong>   <br />
  <p className="leading-8 my-3">    
 
 
  
      Enhance your development efforts by integrating seasoned developers.
      At Sparkling, our skilled engineers smoothly integrate into your project, empowering you to excel at what you do best.
      Experience a significant boost in production and enjoy peace of mind
    </p></div>
);

const image = <img src="/img/team/logo.png" height={514} className="h-full" alt='sectionOne' />;

const element = {
  content: content,
  header: header,
  index: 1,
  image: image,
  id: 'team'
};
export default element;
