const content = <p>Working in focussed sprints with constant updates ensures a smoother project, helping us steering it in the right direction, with less hiccups and more control.</p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Agile Collaboration</h3>
const image = <img src='/img/section/sectionOne.png'/>;
const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.Row
}
export default element
