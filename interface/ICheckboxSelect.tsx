import { ChangeEvent } from "react";
import ICheckboxItem from "./IChekboxItem";


interface ICheckboxSelect {

    id: ICheckboxItem
    checked: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    
  }
  
export default ICheckboxSelect