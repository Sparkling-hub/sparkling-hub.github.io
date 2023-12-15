
import { ChangeEvent, MouseEventHandler } from "react";
import IJob from "./IJob"



interface IFilterProps {
    dataJobs: IJob[]
    uniqueIds: string[]
    activeMultiselect: string[]

    handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void
    deleteItem:  MouseEventHandler<HTMLSpanElement>;  
  }
  
  export default IFilterProps