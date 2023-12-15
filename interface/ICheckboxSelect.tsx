import { ChangeEvent } from "react";
import IJob from "./IJob"



interface ICheckboxSelect {
    
    id: string
    checked: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    
  }
  
export default ICheckboxSelect