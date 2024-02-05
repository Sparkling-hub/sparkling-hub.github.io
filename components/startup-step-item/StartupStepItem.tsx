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
		<li className={`flex-col px-40 flex items-center relative  pb-[5rem]`}>
			{highlighted?
			<svg width="477" height="310" viewBox="0 0 477 402" className={`absolute ${index%2? "top-7 right-[5%]":'top-7 left-[5%]'}`} fill="none" xmlns="http://www.w3.org/2000/svg"  style={{ transform: index % 2 ? '' : 'scale(-1, 1)' }}>
				<path
					d="M0 3H434C456.091 3 474 20.9086 474 43V359C474 381.091 456.091 399 434 399H0"
					stroke="#1A5858"
					stroke-width="5"
					stroke-dasharray="1500" stroke-dashoffset="1500"
				>
					<animate
						attributeName="stroke-dashoffset"
						values="1500;0"
						dur="1s"
						begin="0s"
						repeatCount="1"
						fill="freeze"
					/>
				</path>
			</svg>:''}


			<div className={`s-b-s-title rounded-3xl p-1 flex bg-primary-yellow border-[3px] border-primary-darkTeal z-20`}>
		
				<div className={`text text-primary-darkTeal text-center w-[315px] h-[50px]  flex items-center justify-center font-bold text-2xl ${highlighted ? 'highlight' : ''}`}>{title}</div>
			</div>

			<div className='s-b-s-text text-center'>
				<div className='mx-5  h-[10rem] pt-5 px-22 text-xl font-light'>{subtext}</div>
			</div>
		</li>
	);
};

export default StartupStepItem;