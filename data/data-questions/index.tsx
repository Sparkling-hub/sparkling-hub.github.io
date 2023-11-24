import questionOne from "./questionOne"
import questionTwo from "./questionTwo"
import questionThree from "./questionThree"
import IQustion from "../../interface/IQustion";
const benefits: Record<string, IQustion> = {
    questionOne: questionOne,
    questionTwo: questionTwo,
    questionThree: questionThree,
  
  };
  
  export default {benefits}