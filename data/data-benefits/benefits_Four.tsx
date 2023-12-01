const content = <p>We believe in fair opportunities for all, challenging the market status quo to ensure quality doesn’t have to come with a hefty price tag.
    </p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Affordable Excellence</h3>
const image = <img src='/img/section/sectionOne.png'/>;

const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.ReverseRow
    
    


}
export default element