const header = (
  <h1 className="mb-4">
    <strong className="s2 text-5xl" >FAQs</strong>
  </h1>
);

const content = (
  <p className="text-5xl font-normal leading-[50px]">
    Got any question?
    <br />
    <strong className="text-teal-400 font-normal">We have answers!
    </strong>
  </p>
);

const image = <img src="/img/section/SectionFAQ.png" className="w-full p-10" alt="FAQ"/>

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
