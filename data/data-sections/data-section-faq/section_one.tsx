const header = (
  <h1>
    <strong className="s2 text-5xl" >FAQs</strong>
  </h1>
);

const content = (
  <p className="text-5xl text-teal-500">
    Got any question?
    <br />
    <strong className="font-black text-teal-800">We have answers!
    </strong>
  </p>
);

const image = <img src="/img/section/SectionFAQ.png" className="w-full p-10" alt="FAQ"/>;

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
