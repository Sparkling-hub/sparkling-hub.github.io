import ContentBenefits from '../../../components/row-benefits/row-benefits'
const header =
<h2 className="flex-col items-center justify-center p-4">
<div className="flex justify-center text-5xl mb-4">
    <span className="color-primary-light font-medium mx-4">Benefits</span> 
    <span className="text-black font-light">of Partnering with Us</span>
</div>


</h2>
const content = <ContentBenefits/>

const element = { 
  content: content,
  header: header,
  id: "benefits", 
  index:4,
  curvedClass: 'before:content-curved_white_without_line before:w-full before:absolute',
  background: 'bg-color-primary-light', 
}
export default element