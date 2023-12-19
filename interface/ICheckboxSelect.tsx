import { ChangeEvent } from "react";

interface ICheckboxSelect {
    
    id: string
    checked: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    
  }
  
export default ICheckboxSelect