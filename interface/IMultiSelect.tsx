
import { ChangeEvent } from "react"
import ICheckboxItem from "./IChekboxItem";


interface IMultiSelect {
    name: string;
    uniqueIds: ICheckboxItem[]
    activeLocations: string[]
    placeholder: string  

    handleParamsChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void    
  }
  
export default IMultiSelect


