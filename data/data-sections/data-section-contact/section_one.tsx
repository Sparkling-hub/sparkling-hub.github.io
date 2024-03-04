const header = (
 <h1 className="text-5xl my-4 text-teal-800 font-bold"> Contact Us
  </h1>
);

const content = (
  <p className="text-xl">
    <strong>Get in touch!</strong>
    <br />
    Drop us a message to learn more about our innovative solutions.
  </p>
);

const image = <img src="/img/section/ContactUs.svg" className="" alt="SectionOne"/>;

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;
