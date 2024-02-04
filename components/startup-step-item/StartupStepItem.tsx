// StartupStepItem.jsx

import IStartupStepItem from '../../interface/IStartupStepItem';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { setAnimation } from '@/store/redusers/startupStepByStepSliceReduser';
import { useDispatch, useSelector } from 'react-redux';

const StartupStepItem: React.FC<IStartupStepItem> = ({ title, subtext, index, highlighted }) => {
	const dispatch = useDispatch();
	const animation = useSelector(setAnimation);
	const [animationTriggered, setAnimationTriggered] = useState(false);
  
	useEffect(() => {
	  const handleTransitionEnd = () => {
		AOS.refresh();
		setAnimationTriggered(true);
	  };
  
	  const elements = document.querySelectorAll('.s-b-s-title');
	 
	  elements.forEach((element, i) => {
		const rect = element.getBoundingClientRect();
		const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
	  })
	
	  return () => {
		elements.forEach((element) => {
		  element.removeEventListener('transitionend', handleTransitionEnd);
		});
	  };
	}, [dispatch, highlighted, index, animationTriggered]);
  
	return (
	  <li className={`flex-col px-40 flex items-center relative`}>
		
		 {index % 2 ? <div className='h-full w-full'>
			<div
			  className={`bg-black h-2 absolute z-[-1] left-1/2 top-[1.5rem] rounded-full`}
			  style={{
				width: highlighted ? '50%' : '0%',
				transition: 'width 500ms linear',
				transitionDelay: `0ms`
			  }}
			></div>
  
			<div
			  className={`bg-black w-2 absolute z-[-1] right-0 top-6 rounded-full`}
			  style={{
				height: highlighted ? '105%' : '0%',
				transition: 'height 500ms linear',
				transitionDelay: `500ms`
			  }}
			></div>
  
			<div
			  className={`bg-black h-2 absolute z-[-1] right-0  bottom-[-2.0rem] rounded-full`}
			  style={{
				width: highlighted ? '50%' : '0%',
				transition: 'width 1s linear',
				transitionDelay: `1000ms`
			  }}
			></div>
		  </div> :
			<div>
			  <div
				className={`bg-black h-2 absolute z-[-1] right-1/2 top-5 rounded-full`}
				style={{
				  width: highlighted ? '50%' : '0%',
				  transition: 'width 500ms linear',
				  transitionDelay: `0ms`
				}}
			  ></div>
  
			  <div
				className={`bg-black w-2 absolute z-[-1] left-0 top-5 rounded-full`}
				style={{
				  height: highlighted ? '105%' : '0%',
				  transition: 'height 500ms linear',
				  transitionDelay: `500ms`
				}}
			  ></div>
			  <div
				className={`bg-black h-2 absolute z-[-1] left-0 bottom-[-2rem]`}
				style={{
				  width: highlighted ? '50%' : '0%',
				  transition: 'width 500ms linear',
				  transitionDelay: `1000ms`
				}}
			  ></div>
			</div> }
		<div className={`s-b-s-title rounded-3xl p-1 flex bg-green-500`}>
		  <div className={`kolo  ${animation ? '' : ''}`}>{index}</div>
		  <div className={`text text-emerald-900 font-bold text-2xl ${highlighted ? 'highlight' : ''}`}>{title}</div>
		</div>
  
		<div className='s-b-s-text '>
		  <div className='mx-5 pt-3 pb-20'>{subtext}</div>
		</div>
	  </li>
	);
  };
  
  export default StartupStepItem;