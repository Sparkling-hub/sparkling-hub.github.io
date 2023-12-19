
import { ChangeEvent, MouseEventHandler } from "react"
import IJob from "./IJob"



interface IMultiSelect {
    name: string;
    uniqueIds: string[]
    activeLocations: string[]
    placeholder: string    
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void
  }
  
export default IMultiSelect