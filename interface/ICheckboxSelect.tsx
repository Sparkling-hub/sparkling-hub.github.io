import { ChangeEvent } from "react";

interface ICheckboxItem {
  value: string;
  count: number;
}

interface ICheckboxSelect {
    
    id: ICheckboxItem
    checked: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    
  }
  
export default ICheckboxSelect