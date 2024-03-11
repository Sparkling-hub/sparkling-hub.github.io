export const updateElementPosition = (activePoint: string | null): any => {
  if (!activePoint) return null;
  const svgPoint = document.getElementById(activePoint);
  const parentElement = svgPoint?.parentElement;
  if (svgPoint && parentElement) {
    let relativeHeight, relativeWidth;

    // Проверяем, является ли текущий браузер Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

   
    if (isSafari) {

        const svgPointRect = svgPoint.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();
        relativeHeight = svgPointRect.top - parentRect.top;
        relativeWidth = svgPointRect.left - parentRect.left;
          }else {
      // Используем стандартный метод для других браузеров
      const svgPointRect = svgPoint.getBoundingClientRect();
      const parentRect = parentElement.getBoundingClientRect();
      relativeHeight = svgPointRect.top - parentRect.top + parentElement.scrollTop;
      relativeWidth = svgPointRect.left - parentRect.left + parentElement.scrollLeft;
    }

    return [relativeHeight, relativeWidth];
  }
  
  return null;
};
