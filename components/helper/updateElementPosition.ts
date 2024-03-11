export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;

  if (svgPoint && parentElement) {

    const svgPointRect = svgPoint.getBoundingClientRect();
    const parentRect = parentElement.getBoundingClientRect();
    console.log(svgPointRect)
    console.log(parentRect)
    const relativeHeight = svgPointRect.top - parentRect.top + parentElement.scrollTop;
    const relativeWidth = svgPointRect.left - parentRect.left + parentElement.scrollLeft;

    return [relativeHeight, relativeWidth];
  }
  
  return null;
};
