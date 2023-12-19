import { MouseEventHandler } from "react"



interface IMultiSelectActiveItem {
    
    id: string 
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void
    name: string;
    activeMultiselect: string[];
  }
  
export default IMultiSelectActiveItem