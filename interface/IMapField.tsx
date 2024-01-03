

import IMaps from "./IMaps";

interface  IMapField{

    currentMap: IMaps | undefined;
    hovered: string | null;
    activeOfficePoint: string | null;
    activeOfficePointCoords: number[];
    
    ChangeMap: (e: React.MouseEvent<HTMLDivElement>)=>void;
    setHovered: React.Dispatch<React.SetStateAction<string | null>>;
    setActiveOfficePoint: React.Dispatch<React.SetStateAction<string | null>>;
    
}
export default IMapField