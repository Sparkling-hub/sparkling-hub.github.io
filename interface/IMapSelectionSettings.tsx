import IMaps from "./IMaps";
import IOfficeCards from "./IOfficeCards";


interface  IMapSelectionSettings{
    
    currentMap: IMaps | undefined;
    currentOfficeCards: IOfficeCards | undefined;
    
}
export default IMapSelectionSettings