
import { ChangeEvent, MouseEventHandler } from "react"

interface IMultiSelect {
    name: string;
    uniqueIds: string[]
    activeLocations: string[]
    placeholder: string    

    handleParamsChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void    
  }
  
export default IMultiSelect


