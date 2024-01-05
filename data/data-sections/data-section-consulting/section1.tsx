

const header =
  <h1 className="flex-col items-center justify-start">
    <div className="font-bold text-4xl 2xl:text-6xl mr-4">IT Consulting</div>
    <br />
    <div className="2xl:text-6xl text-4xl color-primary-light">Empowering</div> 
    <div className="font-bold text-4xl 2xl:text-6xl">Your Digital Growth</div> 
    <br />
  </h1>

const content = <p>In the face of challenges or in pursuit of business evolution, a thoughtful IT consultation is essential. Tailored to your unique needs and objectives our guidance is designed to steer your business on the right track!</p>       
  


const image = <img src='/img/section/IT_Consulting_icon.png' className="w-full" alt="consulting_icon" />;

const element = {
  content: content,
  header: header,
  image: image,
  padding_bottom: "pb-40 custom-pb-60",
  index: 1,

}
export default element