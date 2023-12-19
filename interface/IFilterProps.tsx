
import { ChangeEvent, MouseEventHandler } from "react";
import IJob from "./IJob"



interface IFilterProps {
    dataJobs: IJob[]
    filterPhraze: string
    activeMultiselect: string[]
    uniqueIds: string[]
    activeSingleselect: string[]  
    uniqueExp: string[]
    
    handleFilterPrazeChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>, name:string,active:string[]) => void
    deleteItem:  (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[])=> void
  }
  
  export default IFilterProps