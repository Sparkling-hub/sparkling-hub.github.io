import SectionOne from "./section_one";
import SectionTwo from "./section_two";
import SectionThree from "./section_three";
import SectionFour from "./section_four";
import type  SectionData  from "../../../interface/section";


export const sections: Record<string, SectionData> = {
  SectionOne: SectionOne,
  SectionTwo:SectionTwo,
  SectionThree:SectionThree,
  SectionFour:SectionFour,
};  


