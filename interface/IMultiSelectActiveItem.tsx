import { MouseEventHandler } from "react"



interface IMultiSelectActiveItem {
    
    id: string 
    deleteItem:  MouseEventHandler<HTMLSpanElement>;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  
export default IMultiSelectActiveItem