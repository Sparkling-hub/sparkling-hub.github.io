const content = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididudddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnt ut labore et dolore msdssdddddddddddddddddddddddddddddddagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi utsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Lorem 3ipsum dolor sit</h3>
const image = <img src='/img/section/sectionOne.png'/>;
const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.Row
 
    


}
export default element