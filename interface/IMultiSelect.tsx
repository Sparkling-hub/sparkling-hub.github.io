
import { ChangeEvent, MouseEventHandler } from "react"
import IJob from "./IJob"



interface IMultiSelect {
    dataJobs: IJob[]
    uniqueIds: string[]
    location: string[]
    placeholder: string    

    handleLocationChange:  (event: ChangeEvent<HTMLInputElement>) => void
    deleteItem:  MouseEventHandler<HTMLSpanElement>;
  }
  
export default IMultiSelect