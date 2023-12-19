
import { ChangeEvent } from "react"

interface IMultiSelect {
    name: string;
    uniqueIds: string[]
    activeLocations: string[]
    placeholder: string    
<<<<<<< HEAD
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void
 }
=======

    handleParamsChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem: (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void    
  }
>>>>>>> fd9ca2c7c5970948b709f2f195055ae7692b3064
  
export default IMultiSelect


