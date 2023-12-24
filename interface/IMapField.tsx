import IMaps from "./IMaps";


interface  IMapField{

    currentMap: IMaps | undefined;
    ChangeMap: (e: React.MouseEvent<HTMLDivElement>)=>void;
    
}
export default IMapField