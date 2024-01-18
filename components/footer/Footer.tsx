

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
							custom-3xl
							-mt-36'>
				<div className=' px-20 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4 '>
					<div className='md:absolute md:right-0 col-span-1 p-4 md:order-3'>
						<div className='relative md:text-right font-medium text-7xl md:text-3xl  pb-10'>Get in touch</div>
						<div className='md:text-right text-5xl md:text-xl'>info@sparkling.co.com</div>
						<div className='md:text-right text-5xl md:text-xl'>+41 (0)91 752 0707 </div>

						<a className='md:float-right' title="LinkedIn" href="https://www.linkedin.com/company/sparkling-company">
							<img className="w-24 h-24 md:w-16 md:h-16 inline-block my-4" src="/img/footer/linkedIn_icon.svg" alt="linkedIn_icon"></img>
						</a>

					</div>
					<div className='col-span-1 p-4 md:order-1'>
						<div className='relative hidden md:block font-bold text-3xl pb-10'>Sparkling</div>
						<div className='relative hidden md:block mb-16'>Sparkling is an industry expert specialised in delivering top-tier Software Development solutions. Through its range of services, Sparkling focusses in providing reliable and tangible value to businesses, aiding in their development efforts.</div>

						<div className='font-medium pb-10 text-7xl md:text-3xl'>Privacy</div>
						<div className='text-5xl md:text-xl'>Privacy Policy</div>
						<div className='text-5xl md:text-xl'>Cookie Policy</div>
					</div>
					<div className='col-span-1 p-4 md:order-2 md:mx-auto'>
						<div className='relative font-medium text-9xl md:text-3xl md:pb-10'>Links</div>
						<ul className='relative text-left flex-col w-1/2  text-7xl md:text-xl'>
							<li>
								<Link className="no-underline py-4" href="/">Home</Link>
							</li>
							<li>
								<Link className="no-underline py-4" href="/about">About Us</Link>
							</li>
							<li>
								<Link className="no-underline py-4" href="/services">Services</Link>
							</li>
							<li>
								<Link className="no-underline py-4" href="/startup">Startup</Link>
							</li>
							<li className='md:hidden'>
								<Link className="no-underline py-4" href="/contact">Get in touch</Link>
							</li>
						</ul>
					</div>

				</div>
				<div className='text-center pb-40 pt-20 px-60 md:px-0 md:pb-20 font-semibold text-5xl md:text-2xl'> &copy; 2023 Sparkling. ALL RIGHT RESERVED </div>
			</div>
		</footer>
	);
};

export default Footer;
