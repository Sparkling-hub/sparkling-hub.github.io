const header = (
  <h1 className="s2  text-teal-800 m-auto mb-6 text-5xl">
    <strong >Contact Us</strong>
  </h1>
);

const content = (
  <p className="text-xl leading-9">
    <strong>Get in touch!</strong>
    <br />
    Drop us a message to learn more about our innovative solutions.
  </p>
);

const image = <img src="/img/section/ContactUs.png" className="" alt="SectionOne"/>;

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
