import SectionOne from "./section_one";
import SectionTwo from "./section_two";
import Section3 from "./section3";

import SectionFour from "./section_four";

import type  SectionData  from "../../../interface/section";



export const sections: Record<string, SectionData> = {
  SectionOne: SectionOne,
  SectionTwo:SectionTwo,
  Section3:SectionTwo,
  SectionFour:SectionFour,

};  


