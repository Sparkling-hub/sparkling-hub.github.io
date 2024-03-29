
import React from 'react';
import Button from "../../components/button";

const header =
	<h1 className=''>
		<span><strong className='color-primary-light'>Software Development</strong></span>
	</h1>


const content =
	<div className="lg:mb-12">
		<p className='2xl:h-[190px] xl:h-[180px] lg:h-[200px] text-xl'>Craft a tailored team of engineers delivering tangible results sprint after sprint. Our expertly managed engineers have a great attention to detail, taking great pride in their craft.</p>
		<ul className='text-left text-xl lg:text-xl font-semibold w-fit m-auto flex flex-col lg:whitespace-normal 2xl:p-0 py-4'>
			<li className='flex items-baseline'>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Team and Project management
			</li>
			<li className='flex items-baseline'>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Dedicated fully functional team
			</li>
			<li className='flex items-baseline'>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Swiss Quality Assurance
			</li>
		</ul>
	</div>


const image = <img src='/img/services/software_development_icon.png' alt="Software Development " />;

const button = <Button href="/software-development" text="Find out more" />
const element = {
	content: content,
	header: header,
	image: image,
	button: button,
	index: 2,
}

export default element