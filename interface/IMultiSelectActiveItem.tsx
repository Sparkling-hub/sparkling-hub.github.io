import { MouseEventHandler } from "react"



interface IMultiSelectActiveItem {
    
    id: string 
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void
    name: string;
    activeLocations: string[];
  }
  
export default IMultiSelectActiveItem