

import React from 'react';
import type SectionType from '../../interface/section';


const Section: React.FC<SectionType> = ({ header, content, image, button, background, id, curvedClass }) => {

	
	return (
		<section className={`flex items-center justify-center relative ${background} ${curvedClass} before:-top-calc py-20  xl:px-40 custom-3xl `} id={id}>
			<div className='max-w-screen-xl w-full items-start mx-10 mb-9 '>
				<div className='content-section flex items-start justify-center flex-col justify-center z-10'>

					<div className='flex items-center whitespace-normal w-full'>
						<div className='flex justify-center flex-col w-full my-12'>{header}
							{content}
						</div>
            
						{!image ? null : <div className='content-image w-full'>  {image}

						</div>}
					</div>


					{button ? <div className='button bottom-0 left-0 h-12'>

						{button}
					</div>
						:
						null
					}


				</div>

			</div>


		</section>


	);
};

export default Section;