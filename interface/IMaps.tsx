

import IOfficeCards from "./IOfficeCards";

interface  IMaps{

    header: JSX.Element;
    image: JSX.Element;
    id: string
    officeCards: IOfficeCards[] | undefined;
    
}
export default IMaps