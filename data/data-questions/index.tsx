import questionOne from "./questionOne"
import questionTwo from "./questionTwo"
import questionThree from "./questionThree"
import questionFour from "./questionFour"
import questionFive from "./questionFive"
import questionSix from "./questionSix"
import questionSeven from "./questionSeven"
import questionEight from "./questionEight"
import questionNine from "./questionNine"
import IQustion from "../../interface/IQustion";
const question: Record<string, IQustion> = {
    questionOne: questionOne,
    questionTwo: questionTwo,
    questionThree: questionThree,
    questionFour:questionFour,
    questionFive:questionFive,
    questionSix:questionSix,
    questionSeven:questionSeven,
    questionEight:questionEight,
    questionNine:questionNine
  
  };
  
  export default {question}