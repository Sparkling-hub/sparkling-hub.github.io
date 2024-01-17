

import Link from 'next/link';
import React from 'react';


const Footer: React.FC = () => {


	return (
		<footer className='mt-36'>
			<div className='before:content-curved_dark_without_line 
							before:w-full
							before:absolute
							before:-top-calc
							content-section 
							bg-color-primary-dark 
							w-150 
							text-white 
							flex-col 
							items-center 
							justify-center
							xl:px-40
							custom-3xl
							-mt-36'>
				<div className='footer-background'></div>				
					<div className='footer-blocks container mx-auto px-4 flex justify-between mt-16'>
						<div className='left-block max-w-[33%]'>
							<div>Sparkling</div>
							<div>Sparkling is an industry expert specialised in delivering top-tier Software Development solutions. Through its range of services, Sparkling focusses in providing reliable and tangible value to businesses, aiding in their development efforts.</div>
						
							<div>Privacy</div>
							<div>Privacy Policy</div>
							<div>Cookie Policy</div>
							</div>
						<div className='center-block max-w-[33%]'>
							<div>Links</div>
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
							<div>Get in touch</div>
							<div>info@sparkling.co.com</div>
							<div>+41 (0)91 752 0707 </div>
							
							<a  title="LinkedIn" href="https://www.linkedin.com/company/sparkling-company">
								<img className="w-16 h-16 inline-block my-4" src="/img/footer/linkedIn_icon.svg" alt="linkedIn_icon"></img>
							</a>

						</div>						
					</div>
					<div className='footer-text'> &copy; 2023 Sparkling. ALL RIGHT RESERVED </div>
			</div>
		</footer>
	);
};

export default Footer;
