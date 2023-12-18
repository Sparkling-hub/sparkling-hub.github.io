
import { ChangeEvent, MouseEventHandler } from "react";
import IJob from "./IJob"



interface IFilterProps {
    dataJobs: IJob[]
    uniqueIds: string[]
    uniqueExp: string[]
    activeMultiselect: string[]
    activeSingleselect: string
    handleExpChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void
    deleteItem:  MouseEventHandler<HTMLSpanElement>;  
  }
  
  export default IFilterProps