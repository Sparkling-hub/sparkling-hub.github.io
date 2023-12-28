

import IMaps from "./IMaps";

interface  IMapSelectionSettings{
    
    currentMap: IMaps | undefined;
    hovered: string | null;
    activeOfficePoint: string | null;
    
    ChangeMap: (e: React.MouseEvent<HTMLDivElement>)=>void;
    setHovered: React.Dispatch<React.SetStateAction<string | null>>;
    setActiveOfficePoint: React.Dispatch<React.SetStateAction<string | null>>;
    
}
export default IMapSelectionSettings