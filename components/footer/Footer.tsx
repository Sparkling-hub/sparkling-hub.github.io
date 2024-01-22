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
							relative
							text-white 
							flex-col 
							items-center 
							justify-center							
							-mt-36'>
				<section className="flex items-center justify-center relative before:w-full before:absolute before:-top-calc py-20  xl:px-40 custom-3xl" id="maps">
					<div className="max-w-screen-2xl w-full items-start mb-9 p-10">
						<div className="content-section relative flex items-start justify-center flex-col justify-center z-10">
							<div className="flex items-center whitespace-normal w-full">
								<div className="flex justify-center flex-col w-full my-12">
									<div className='grid grid-cols-1 lg:grid-cols-3 gap-[25%] '>
										<div className='lg:block right-[50px] absolute lg:right-40  col-span-1 p-4 lg:order-3'>
											<div className='relative lg:text-right font-medium text-7xl lg:text-3xl  pb-10'>Get in touch</div>
											<div className='lg:text-right text-5xl lg:text-xl'>info@sparkling.co.com</div>
											<div className='lg:text-right text-5xl lg:text-xl'>+41 (0)91 752 0707 </div>

											<a className='lg:float-right' title="LinkedIn" href="https://www.linkedin.com/company/sparkling-company">
												<img className="w-24 h-24 lg:w-16 lg:h-16 inline-block my-4" src="/img/footer/linkedIn_icon.svg" alt="linkedIn_icon"></img>
											</a>

										</div>
										<div className='col-span-1 p-4 lg:order-1'>
											<div className='relative hidden lg:block font-bold text-3xl pb-10'>Sparkling</div>
											<div className='relative hidden lg:block mb-16'>Sparkling is an industry expert specialised in delivering top-tier Software Development solutions. Through its range of services, Sparkling focusses in providing reliable and tangible value to businesses, aiding in their development efforts.</div>

											<div className='font-medium pb-10 text-7xl lg:text-3xl'>Privacy</div>
											<div className='text-5xl lg:text-xl'>Privacy Policy</div>
											<div className='text-5xl lg:text-xl'>Cookie Policy</div>
										</div>
										<div className='col-span-1 p-4 lg:order-2 lg:mx-auto'>
											<div className='relative font-medium text-9xl lg:text-3xl lg:pb-10'>Links</div>
											<ul className='relative text-left flex-col w-1/2  text-7xl lg:text-xl'>
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
												<li className='lg:hidden'>
													<Link className="no-underline py-4" href="/contact">Get in touch</Link>
												</li>
											</ul>
										</div>

									</div>
									<div className='text-center pb-40 pt-[300px] lg:pt-[0px] px-60 lg:px-0 lg:pb-[0px] font-semibold text-5xl lg:text-2xl'> &copy; 2023 Sparkling. ALL RIGHT RESERVED </div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</footer>

		// 	<div

		//   className={`content-section mx-auto xl:px-40 custom-3xl z-20`}
		// >
		//   <nav className='flex justify-between px-20 py-4 min-w-[900px] text-center '>
		//     <Link href="/" className='h-full w-[20%]' title="Back to Home " >
		//       <img className="w-full"  src='/img/navbar/logo2.png' alt="Logo" />
		//     </Link>
		//     <ul className='flex justify-between py-4 whitespace-nowrap'>



		//       <li>
		//         <Link className="no-underline p-4" href="/about">About Us</Link>
		//       </li>          
		//       <li>
		//         <Link className="no-underline p-4" href="/startup">Start Up</Link>
		//       </li>
		//       <li>
		//         <Link className="no-underline p-4" href="/careers">Careers</Link>
		//       </li>
		//       <li>
		//         <Link className="no-underline p-4" href="/faq">FAQ</Link>
		//       </li>


		//     </ul>
		//   </nav>
		// </div>
	);
};

export default Footer;