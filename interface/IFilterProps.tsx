
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
    handleParamsChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem:  (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void

  }
  
  export default IFilterProps