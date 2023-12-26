import IMaps from "./IMaps";
import IOfficeCards from "./IOfficeCards";


interface  IMapField{

    currentMap: IMaps | undefined;
    hovered: string | null;
    
    ChangeMap: (e: React.MouseEvent<HTMLDivElement>)=>void;
    setHovered: React.Dispatch<React.SetStateAction<string | null>>;
    
}
export default IMapField