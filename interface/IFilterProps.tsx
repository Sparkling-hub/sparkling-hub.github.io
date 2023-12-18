
import { ChangeEvent, MouseEventHandler } from "react";
import IJob from "./IJob"



interface IFilterProps {
    dataJobs: IJob[]
    filterPhraze: string
    activeMultiselect: string[]
    uniqueIds: string[]
    activeSingleselect: string    
    uniqueExp: string[]
    
    handleFilterPrazeChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void
    deleteItem:  MouseEventHandler<HTMLSpanElement>;
    handleExpChange: (event: ChangeEvent<HTMLInputElement>) => void      
  }
  
  export default IFilterProps