
export enum FlexValues {
  Row = 'row',
  ReverseRow = 'reverse-row',
}

//TODO change to IBenefits 
interface IBenedits { 
    content?: JSX.Element;
   header?: JSX.Element;
   image?: JSX.Element;
   flex: FlexValues;
   }
 export default IBenedits