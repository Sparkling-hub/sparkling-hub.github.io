 
const header =
<h1 className="flex items-center justify-start">
  <span className="font-bold text-4xl 2xl:text-6xl mr-4">Start-up</span> <span className="2xl:text-6xl text-4xl color-primary-light">accelerator</span> <br />
</h1>

const content = 
<>
<p>Over the last decade, we have collaborated with more than 20 start-ups, spanning from pre-seed stages to Series A, helping entrepreneurs in transforming their ideas into reality and supporting others in scaling and iterating.</p>
<br/>
<br/>
<p>Our strategic partnerships with multiple universities offer us the unique access to exceptionally talented graduating software engineers, enriching our project teams and accelerating development. Following a 6-months internship program, you will have the chance to handpick and onboard the most suitable engineers to continue working on your project.</p>
</>


const image = <img src='/img/startup/startup_icon.png' className="w-full" alt="startup_icon"/>;

const element = {
content: content,
header: header,
image: image,
padding_bottom: "pb-40 custom-pb-60",
index: 1,

}
export default element