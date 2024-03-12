export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;


  if (svgPoint && parentElement) {
    let relativeHeight, relativeWidth;


      const svgPointRect = svgPoint.getBoundingClientRect();

      const parentRect = parentElement.getBoundingClientRect();
 
      relativeHeight = svgPointRect.top - parentRect.top + parentElement.scrollTop;
      relativeWidth = svgPointRect.left - parentRect.left + parentElement.scrollLeft;

      svgPoint.classList.add('hidden')
    return [relativeHeight, relativeWidth];
  }
  
  return null;
};
