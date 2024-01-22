

import React from 'react';
import type SectionType from '../../interface/section';


const Section: React.FC<SectionType> = ({ header, content, image, button, background, id, curvedClass }) => {

	return (
		<section className={`flex items-center justify-center relative  ${background} ${curvedClass} before:-top-calc py-20 custom-3xl `} id={id}>
			<div className='max-w-screen-xl w-full items-start mx-14 mb-9 '>
				<div className=' flex items-start justify-center flex-col justify-center  z-[10]'>

					<div className='flex items-center whitespace-normal w-full  lg:flex-row flex-col'>
						<div className='flex justify-center flex-col w-full my-12 items-center lg:items-start'>
							<div className='lg:text-left text-center w-full text-5xl  z-[10]'>{header}</div>
							{!image ? null : <div className='w-fit h-full flex lg:hidden  z-[10]'>  {image}
							
							</div>}
							<div className='text-left w-full  z-[20]'>{content}</div>
						</div>

						{!image ? null : <div className='content-image w-full hidden lg:flex  z-[10]'>  {image}

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
