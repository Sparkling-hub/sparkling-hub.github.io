
const header =
  <h1 className="text-5xl my-4 color-primary-light mx-1 ">Sparkling’s<strong className="s2 text-teal-800"> Vision</strong></h1>


const content =
  <p className="text-xl">
    We envision a world where the creation of software transcends the mere technical process, evolving in a true art form,
    where quality will always stand over quantity.
    Engraining this concept into our culture makes us who we are, dedicated to excellence. Perhaps is the Swiss way
  </p>

const image = <img src='/img/about/logo.svg' className="mb-20" alt="about" />;

const element = {
  content: content,
  header: header,
  image: image,
  id: "about"

}
export default element