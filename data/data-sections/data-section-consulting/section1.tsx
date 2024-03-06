

const header =
  <h1 className="text-5xl font-bold text-primary-darkTeal leading-[40px] font-Ralevay_Light mb-2">
    IT Consulting
    <br />

   
  </h1>

const content = <div className=" text-primary-darkTeal">    
  <h2 className="text-2xl leading-[40px]">  <strong  className="">Empowering</strong>
    <br />
  <strong className="font-bold ">Your Digital Growth</strong></h2>
<p className="text-xl mt-4">In the face of challenges or in pursuit of business evolution, a thoughtful IT consultation is essential. Tailored to your unique needs and objectives our guidance is designed to steer your business on the right track!</p>       
</div>
  


const image = <img src='/img/section/IT_Consulting_icon.png' className="w-full" alt="consulting_icon" />;

const element = {
  content: content,
  header: header,
  image: image,
  padding_bottom: "pb-40 custom-pb-60",
  index: 1,

}
export default element