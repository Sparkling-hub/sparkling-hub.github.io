import IMaps from "./IMaps";
import IOfficeCards from "./IOfficeCards";


interface  IMapField{

    currentMap: IMaps | undefined;
    currentOfficeCards: IOfficeCards | undefined;
    ChangeMap: (e: React.MouseEvent<HTMLDivElement>)=>void;
    
}
export default IMapField