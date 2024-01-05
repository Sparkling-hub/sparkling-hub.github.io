
import React from 'react';
import Button from "../../components/button";

const header =
	<h1 className='h-24'>
		<span><strong className='color-primary-light'>Software Development</strong></span>
	</h1>


const content =
	<div className="mb-12 h-52">
		<p className='h-32'>Craft a tailored team of engineers delivering tangible results sprint after sprint. Our expertly managed engineers have a great attention to detail, taking great pride in their craft.</p>
		<ul className='text-left w-fit m-auto'>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Team and Project management
			</li>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Dedicated fully functional team
			</li>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Swiss Quality Assurance
			</li>
		</ul>
	</div>


const image = <img src='/img/services/software_development_icon.png' alt="Software Development " />;

const button = <Button href="/software" text="Find out more" />
const element = {
	content: content,
	header: header,
	image: image,
	button: button,
	index: 2,
}

export default element