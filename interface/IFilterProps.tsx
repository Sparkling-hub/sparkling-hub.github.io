
import { ChangeEvent } from "react";
import IJob from "./IJob"
import ICheckboxItem from "./IChekboxItem";



interface IFilterProps {
    dataJobs: IJob[]
    filterPhraze: string
    activeLocations: string[]
    uniqueIds: ICheckboxItem[]
    activePositions: string[]  
    uniqueExp: ICheckboxItem[]
    
    handleFilterPrazeChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleParamsChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem:  (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void

  }
  
  export default IFilterProps