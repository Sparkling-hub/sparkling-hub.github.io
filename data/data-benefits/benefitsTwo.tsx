const content = <p>Having an experienced captain to lead your crew is imperative, to steer it in the right direction and soar to new heights. </p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Experienced CTO Guidance</h3>
const image = <img src='/img/section/sectionOne.png'/>;
const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.ReverseRow

}
export default element
