const header = (
  <h1 className="text-center font-bold text-5xl text-teal-800 mb-5">
    FAQs
  </h1>
);

const content = (
  <p className="text-5xl text-teal-500 text-center">
    Got any question?
    <br />
    <strong className="font-black text-teal-800">We have answers!
    </strong>
  </p>
);

const image = <img src="/img/section/SectionFAQ.svg" className="w-full p-10" alt="FAQ" />

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
