export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;


  if (svgPoint && parentElement) {
    let relativeHeight, relativeWidth;


      const svgPointRect = svgPoint.getBoundingClientRect();
      console.log(svgPointRect);
      const parentRect = parentElement.getBoundingClientRect();
      console.log(svgPoint)
    
      console.log(parentElement)
      relativeHeight = svgPointRect.top - parentRect.top + parentElement.scrollTop;
      relativeWidth = svgPointRect.left - parentRect.left + parentElement.scrollLeft;
   

    return [relativeHeight, relativeWidth];
  }
  

};
