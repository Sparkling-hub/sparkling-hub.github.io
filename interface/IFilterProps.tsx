
import { ChangeEvent } from "react";
import IJob from "./IJob"



interface IFilterProps {
    dataJobs: IJob[]
    filterPhraze: string
    activeLocations: string[]
    uniqueIds: string[]
    activePositions: string[]  
    uniqueExp: string[]
    
    handleFilterPrazeChange: (event: ChangeEvent<HTMLInputElement>) => void
<<<<<<< HEAD
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void

=======
    handleParamsChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
>>>>>>> fd9ca2c7c5970948b709f2f195055ae7692b3064
    deleteItem:  (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void

  }
  
  export default IFilterProps