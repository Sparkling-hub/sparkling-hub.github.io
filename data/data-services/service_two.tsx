
import React from 'react';
import Button from "../../components/button";

const header =
  <h1 className='h-24'><span><strong className='color-primary-light'>Software Development</strong></span> </h1>


const content = 
				<div className="mb-12">
					<p>Craft a tailored team of engineers delivering tangible results sprint after sprint. Our expertly managed engineers have a great attention to detail, taking great pride in their craft.</p>
					<ul>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Team and Project management</li>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Dedicated fully functional team</li>
						<li><img className='w-4 h-4 inline-block mx-2' src='/img/right-arrow-circle.svg' alt=""/>Swiss Quality Assurance</li>
					</ul>
				</div>
       

const image = <img src='/img/services/team_augmentation_icon.png' alt="Software Development "/>;
const button=   <Button href="/get-in-touch" text="Find out more" />
const element = {
  content: content,
  header: header,
  image: image,
  button:button
}

export default element