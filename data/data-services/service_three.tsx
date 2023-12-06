
import React from 'react';
import Button from "../../components/button";

const header =
  <h1 className='h-24'><span><strong className='color-primary-light'>IT Consulting</strong></span> </h1>


const content = 
				<div className="mb-12">
					<p>Revamp your product strategy with personalized guidance addressing complex challenges with tailored solutions. Our experts are here to steer you back on the right track.</p>
					<ul>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Research & Development (R&D)</li>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Architecture and DevOps</li>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Long-term Strategy Development</li>
					</ul>
				</div>
       

const image = <img src='/img/services/team_augmentation_icon.png' alt="IT Consulting"/>;
const button=   <Button href="/get-in-touch" text="Find out more" />
const element = {
  content: content,
  header: header,
  image: image,
  button:button
}

export default element