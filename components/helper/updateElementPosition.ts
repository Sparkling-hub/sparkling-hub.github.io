export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;
  console.log(svgPoint);

  if (svgPoint && parentElement) {
    let relativeHeight, relativeWidth;


      const svgPointRect = svgPoint.getBoundingClientRect();
      console.log(activePoint);
      const parentRect = parentElement.getBoundingClientRect();
      relativeHeight = svgPointRect.top - parentRect.top + parentElement.scrollTop;
      relativeWidth = svgPointRect.left - parentRect.left + parentElement.scrollLeft;


    return [relativeHeight, relativeWidth];
  }
  
  return null;
};
