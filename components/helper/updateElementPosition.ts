export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;

  if (svgPoint && parentElement) {


    const rect = svgPoint.getBoundingClientRect();
const relativeHeight = rect.top + window.scrollY;
const relativeWidth = rect.left + window.scrollX;

    return [relativeHeight, relativeWidth];
  }
  
  return null;
};
