const content = <p>We believe in synergy! Either by augmenting your existing team or creating a crew from scratch, we find the perfect solution for your needs.</p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Tailored Teams</h3>
const image = <img src='/img/section/sectionOne.png'/>;

const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.ReverseRow
 
    


}
export default element