import SectionOne from "./section_one";
import SectionTwo from "./section_two";

import SectionFour from "./section_four";
import SectionFive from "./section_five";
import type  SectionData  from "../../interface/section";



export const sections: Record<string, SectionData> = {
  SectionOne: SectionOne,
  SectionTwo:SectionTwo,
  SectionFour:SectionFour,
  SectionFive:SectionFive
};  


