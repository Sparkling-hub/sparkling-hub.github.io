

import IOfficeCards from "./IOfficeCards";

interface  IMaps{

    name: string;
    header: JSX.Element;
    image: JSX.Element;
    id: string
    officeCards: IOfficeCards[] | undefined;
    
}
export default IMaps