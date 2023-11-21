import SectionOne from "./section";

interface ISectionData {
  content: JSX.Element;
  header: JSX.Element;
  button: string;
}


export const sections: { SectionOne: ISectionData } = {
  SectionOne: SectionOne,
};