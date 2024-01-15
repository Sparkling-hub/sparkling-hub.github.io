

import { ChangeEvent } from "react"
import ICheckboxItem from "./IChekboxItem";

interface IMultiSelect {

    name: string;
    activeValues:string[];
    uniqueIds:ICheckboxItem[];
    placeholder: string  

      
  }
  
export default IMultiSelect


