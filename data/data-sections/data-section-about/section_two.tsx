
const header =
  <h2>Who <strong className="s2">We Are</strong></h2>


const content =
<div className="p-8 bg-gray-100 rounded-2xl max-w-[1000px] mx-auto mb-20">
  <p>
    Sparkling Co. is an industry expert in digital services with over a decade of field experience in Software Development.
    Our expertise extends to providing dedicated teams of developers and project managers for both in-house project as well
    as in Team Augmentation, where our experts seamlessly integrate into client-led endeavours. Headquartered in Switzerland
    our branches reach out across Europe and North Africa, from London to Tunis.
  <br/>
  <br/>
    Specialising in delivering top-tier Software Development solutions we excel in
    long-term projects such as spearheading Research and Development (R&D) initiatives,
    implementing efficient Project Management methodologies, and offering strategic IT Consulting.
    Beyond these core strengths we actively engage in nurturing start-ups in various stages and steer MVPs
    developments through impactful partnerships with esteemed Universities.
  </p>
  </div>



const element = {
  content: content,
  header: header,
  curvedClass: 'before:content-curved_white_with_line before:w-full before:absolute before: bottom-10',
  background: 'bg-color-primary-light', 
  id: "whoSparkling"

}
export default element