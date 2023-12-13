
import IBenefit from '../../interface/IBenefits';

const content = <p>Working in focussed sprints with constant updates ensures a smoother project, helping us steering it in the right direction, with less hiccups and more control.</p>

const header = <h3>Agile Collaboration</h3>
const image = '/img/benefits/Agile_working.png';
const element : IBenefit= {
    header: header,
    content: content,
    image: image,
    index: 5,
}
export default element
