
import { ChangeEvent, MouseEventHandler } from "react"
import IJob from "./IJob"



interface IMultiSelect {
    name: string;
    uniqueIds: string[]
    activeMultiselect: string[]
    placeholder: string    
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem:  MouseEventHandler<HTMLSpanElement>;
  }
  
export default IMultiSelect