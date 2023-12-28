
import React from 'react';
import Button from "../../components/button";

const header =
	<h1 className='h-24'><span><strong className='color-primary-light'>Team Augmentation</strong></span> </h1>


const content =
	<div className="mb-12 h-52">
		<p className='h-32'>Enhance your development efforts by extending your existing team or build your new team from scratch. Customise it to your needs to create a perfect fit!</p>
		<ul>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Full stack develoment
			</li>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Technical support
			</li>
			<li>
				<img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" />Agile Collaboration
			</li>
		</ul>
	</div>


const image = <img src='/img/services/team_augmentation_icon.png' alt="teamAugmentation" />;
const button = <Button href="/get-in-touch" text="Find out more" />
const element = {
	content: content,
	header: header,
	image: image,
	button: button,
	index: 1,
}

export default element