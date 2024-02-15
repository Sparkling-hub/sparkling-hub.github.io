
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStartupStepByStep, setHighlightedIndices } from '@/store/redusers/startupStepByStepSliceReduser';
import dataStartupSteps from '@/data/data-sections/data-section-startup/data-startup-step-by-step';
import StartupStepItem from '../startup-step-item';
import Link from 'next/link';

const StartupStepByStep: React.FC = () => {
  const dispatch = useDispatch();
  const { highlightedIndices } = useSelector(selectStartupStepByStep);

  useEffect(() => {
  

    const handleScroll = () => {
      const elements = document.querySelectorAll('.s-b-s-title');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
       
        if (isVisible && !highlightedIndices[index] && index ==1) {
          dispatch(setHighlightedIndices([...highlightedIndices, true]))
        }  

        if (!highlightedIndices[index]){      setTimeout(() => {
          if(isVisible)dispatch(setHighlightedIndices([...highlightedIndices, true])); }, 1000); } 
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, highlightedIndices]);

  return (
    <div className='flex flex-wrap justify-center items-center'>
      <ol>
        {dataStartupSteps.map((step) => (
          <StartupStepItem key={Number(step.index)} {...step} highlighted={highlightedIndices[step.index]} />
        ))}
        
      </ol>
     

      <div className='top-[-15px] p-3 relative flex items-center justify-center w-[450px] h-[90px] bg-primary-darkTeal rounded-full text-green-300  hover:bg-teal-700 s-b-s-title'>
      <Link className="no-underline relative  text-2xl z-10 font-bold text-primary-yellow text-center"  href={'/contact'} >Embark in your MVP adventure!</Link>

      </div>
    </div>
  );
};

export default StartupStepByStep;
