
import IBenefit from '../../interface/IBenefits';

const content =
    <p>
        Having an experienced captain to lead your crew is imperative,
        to steer it in the right direction and soar to new heights.
    </p>

const header = <h3>Experienced CTO Guidance</h3>
const image = '/img/benefits/Seasoned_CTO.png';
const element: IBenefit = {
    header: header,
    content: content,
    image: image,
    index: 2,

}
export default element
