
import React from 'react';
import Button from "../../components/button";

const header =
  <h1><span><strong className='color-primary-light'>Team augmentation</strong></span> </h1>


const content = 
				<div className="mb-12">
					<p>Bring additions to your existing team or build your team from scratch. Adapt it to your needs to create a perfect fit</p>
					<ul>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Full stack develoment</li>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Technical support</li>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Agile working team</li>
					</ul>
				</div>
       

const image = <img src='/img/services/team_augmentation_icon.png'/>;
const button=   <Button href="/get-in-touch" text="Find out more" />
const element = {
  content: content,
  header: header,
  image: image,
  button:button
}

export default element