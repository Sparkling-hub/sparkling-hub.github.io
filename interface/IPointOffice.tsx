
import IOfficeCards from "./IOfficeCards";

interface  IPointOffice{

    officeCard: IOfficeCards | undefined; 
    hovered: string | null;
    activeOfficePoint: string | null;
    
    
    setHovered: React.Dispatch<React.SetStateAction<string | null>>;
    setActiveOfficePoint: React.Dispatch<React.SetStateAction<string | null>>;

}
export default IPointOffice