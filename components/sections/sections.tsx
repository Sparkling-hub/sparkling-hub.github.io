

import React from 'react';
import type SectionType from '../../interface/section';


const Section: React.FC<SectionType> = ({ header, content, image, button, background, id, curvedClass }) => {

	return (

		<section className={`flex items-center justify-center relative ${background} ${curvedClass} before:-top-calc pb-20  xl:px-40 custom-3xl`} id={id}>
			<div className='max-w-screen-xl w-full items-start mb-9 '>
				<div className='content-section flex items-start justify-center flex-col justify-center'>

					<div className='flex items-center whitespace-normal w-full'>
						<div className='flex justify-center flex-col w-full m-16'>{header}
							{content}
						</div>

						{!image ? null : <div className='content-image w-full'>  {image}

						</div>}
					</div>


					{button ? <div className='button bottom-0 left-0'>
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