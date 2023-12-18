
import { ChangeEvent } from "react"
import IJob from "./IJob"



interface ISingleSelect {
    dataJobs: IJob[]
    uniqueExp: string[]
    position: string
    placeholder: string    

    handleExpChange:  (event: ChangeEvent<HTMLInputElement>) => void
  }
  
export default ISingleSelect