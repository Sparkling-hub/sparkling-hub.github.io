const header = (
  <h1 className="text-center font-bold text-5xl text-primary-darkTeal mb-5">
    FAQs
  </h1>
);

const content = (<p className="text-primary-darkTeal leading-[40px] text-2xl ">
<strong className=""> 
    Got any question? </strong>
    <br />

    <strong className="font-black text-primary-darkTeal">We have answers!
    </strong>
  </p>
);

const image = <img src="/img/section/SectionFAQ.png" className="w-full p-10" alt="FAQ" />

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
