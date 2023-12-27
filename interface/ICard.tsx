

import IOfficeCards from "./IOfficeCards";

interface  ICard{

    officeCard: IOfficeCards | undefined;  
    setActiveOfficePoint: React.Dispatch<React.SetStateAction<string | null>>; 
    
}
export default ICard