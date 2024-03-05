

const header =
  <h1 className="text-5xl font-bold text-teal-800 leading-[50px] font-Ralevay_Light mb-10">
    IT Consulting
    <br />
   <span className="font-light text-teal-800">Empowering</span>
    <br />
  <span className="font-bold">Your Digital Growth</span>
   
  </h1>

const content = <p className="text-xl">In the face of challenges or in pursuit of business evolution, a thoughtful IT consultation is essential. Tailored to your unique needs and objectives our guidance is designed to steer your business on the right track!</p>       
  


const image = <img src='/img/section/it_consulting_icon.png' className="w-full" alt="consulting_icon" />;

const element = {
  content: content,
  header: header,
  image: image,
  padding_bottom: "pb-40 custom-pb-60",
  index: 1,

}
export default element