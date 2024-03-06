const header = (
 <h1 className="text-5xl my-4 text-primary-darkTeal font-bold"> Contact Us
  </h1>
);

const content = (
  <p className="text-xl text-primary-darkTeal">
    <strong className="text-2xl">Get in touch!</strong>
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
