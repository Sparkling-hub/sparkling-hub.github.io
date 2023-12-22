const header = (
  <h1>
    <strong className="s2">FAQs</strong>
  </h1>
);

const content = (
  <p>
    Got any question?
    <br />
    <span>We have answers.</span>
  </p>
);

const image = <img src="/img/section/SectionFAQ.png" className="w-full p-10" alt="faq-icon"/>;

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
