const content = <p>Our Swiss roots instil a commitment to quality over mere quantity. Attention to detail and excellence are our core values.</p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Swiss Quality Assurance</h3>
const image = <img src='/img/section/sectionOne.png'/>;
const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.Row
 
    


}
export default element