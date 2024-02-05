

const header = (
  <h1 className="text-5xl font-light mb-10 text-teal-800">
   Team build <strong className="font-bold">Augmentation</strong>


  
  </h1>
);


const content = (<div>
  <strong className=" text-2xl text-teal-800"> Level up your projects with enhanced teams</strong>
  <p className="text-xl my-3">    
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
