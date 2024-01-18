

import IOfficeCards from "./IOfficeCards";

interface  ICard{

    officeCard: IOfficeCards | undefined;  
    setActiveOfficePoint: React.Dispatch<React.SetStateAction<string | null>>; 
    coord: number[]

    
}
export default ICard