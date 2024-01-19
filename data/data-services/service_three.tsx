
import React from 'react';
import Button from "../../components/button";

const header =
	<h1 className=''><span><strong className='color-primary-light'>IT Consulting</strong></span> </h1>


const content =	<div className="2xl:mb-12  pb-4 2xl:pt-0 ">
<p className='2xl:h-[200px]'>
			Revamp your product strategy with personalized guidance addressing complex challenges with tailored solutions.
			Our experts are here to steer you back on the right track.
		</p>
		<ul className='text-left text-2xl 2xl:text-xl w-fit m-auto  2xl:p-0 p-4'>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Research & Development (R&D)
			</li>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Architecture and DevOps
			</li>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Long-term Strategy Development
			</li>
		</ul>
	</div>


const image = <img src='/img/services/it_consulting_icon.png' alt="IT Consulting" />;

const button = <Button href="/consulting" text="Find out more" />

const element = {
	content: content,
	header: header,
	image: image,
	button: button,
	index: 3,
}

export default element