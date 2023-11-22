const content = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
     eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
import IBenedits, { FlexValues } from '../../interface/IBenefits';
const header = <h3>Lorem ipsum dolor sit</h3>
const image =<img></img>

const element : IBenedits= {
    header: header,
    content: content,
    image: image,
    flex: FlexValues.ReverseRow
    
    


}
export default element