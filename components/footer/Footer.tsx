import Link from 'next/link';
import React from 'react';



const Footer: React.FC = () => {
	return (
		<footer className='mt-36'>
			<div className='before:content-curved-primary-dark 
							before:w-full
							before:absolute
							before:-top-56					
							content-section 
							bg-color-primary-dark 
							w-150 
							text-white 
							flex-col 
							items-center 
							justify-center
							xl:px-40
							custom-3xl'>
				<div className='footer-background'></div>				
					<div className='footer-blocks container mx-auto px-4 flex justify-between'>
						<div className='left-block max-w-[33%]'>
							<div>Sparkling</div>
							<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </div>
						</div>
						<div className='center-block max-w-[33%]'>
							<div>LINKS</div>
							<ul className='flex-col w-1/2 justify-between py-4'>
								<li>
									<Link className="no-underline p-4" href="/">Home</Link>
								</li>
								<li>
									<Link className="no-underline p-4" href="/about">About Us</Link>
								</li>
								<li>
									<Link className="no-underline p-4" href="/services">Services</Link>
								</li>
								<li>
									<Link className="no-underline p-4" href="/startup">Startup</Link>
								</li>
							</ul>
						</div>
						<div className='right-block max-w-[33%]'>
							<div>GET IN TOUCH</div>
							<div>info@sparkling.co.com</div>
							<div>+41 (0)91 752 0707 </div>
						</div>						
					</div>
					<div className='footer-text'> &copy; 2023 Sparkling. ALL RIGHT RESERVED </div>
			</div>
		</footer>
	);
};

export default Footer;