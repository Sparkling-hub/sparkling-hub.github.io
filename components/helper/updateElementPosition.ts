export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;

  if (svgPoint && parentElement) {

    const relativeHeight = svgPoint.offsetTop;
    const relativeWidth = svgPoint.offsetLeft;

    return [relativeHeight, relativeWidth];
  }
  
  return null;
};
