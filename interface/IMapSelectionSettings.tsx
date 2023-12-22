import IMaps from "./IMaps"


interface  IMapSelectionSettings{
    
    currentMap: IMaps | null;
    handleMapsClick: (e: any) => void;
    
}
export default IMapSelectionSettings