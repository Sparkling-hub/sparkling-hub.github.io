
import { ChangeEvent, MouseEventHandler } from "react"
import IJob from "./IJob"



interface ISingleSelect {
    dataJobs: IJob[]
    uniqueExp: string[]
    activeSingleselect: string
    placeholder: string    

    handleExpChange:  (event: ChangeEvent<HTMLInputElement>) => void
    deleteItem:  MouseEventHandler<HTMLSpanElement>;
  }
  
export default ISingleSelect