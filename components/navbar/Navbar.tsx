import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DropList from '../ui/drop-list-navbar/drop-list-navbar';
import Button from '../button';


const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const services = [
    {id:1, href: '/team-augmentation', text: 'Team Augmentation' },
    {id:2, href: '/software-development', text: 'Software Development' },
    {id:3, href: '/consulting', text: 'IT Consulting' },
  ];
  const links = [

    { href: '/about', text: 'About Us' },
    { href: '/startup', text: 'Start Up' },
    { href: '/careers', text: 'Careers' },
    { href: '/faq', text: 'FAQ' },
  ]; 
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const isTop = window.scrollY < 20; 
      setHasShadow(!isTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return  (
  
    <header className={`bg-white bg-opacity-95 sticky top-0 z-30  ${hasShadow ? 'shadow-md transition-shadow duration-300' : 'shadow-none transition-shadow duration-300'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8" aria-label="Global">
        <div className="flex justify-between text-xl items-center ">
          
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 pr-14 lg:h-auto w-auto min-w-[23rem]" src="/img/navbar/logo2.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex md:hidden  h-full">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md h-[60px] w-[60px] relative text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
      
                <div className="block h-[25px] w-[25.5px] absolute bottom-[3px] z-30 transform">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${ mobileMenuOpen?'rotate-45': ' -translate-y-1.5'}`}></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${mobileMenuOpen ?'opacity-0': '' } `}></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${mobileMenuOpen ? '-rotate-45':' translate-y-1.5'}`}></span>
                </div>
          </button>
        </div>
        <ul className="hidden md:flex md:gap-x-12 ">
        <DropList name={'Services'} DataLink={services} mobileMenuOpen={false}/>
          {links.map((link) => (
            <li key={link.href} className='flex items-center'>
             
       
              <Link href={link.href} className='no-underline text-base font-semibold leading-6 text-gray-900 w-max'>

                {link.text}

              </Link>
            </li>
          ))}

     
 

          <li className='w-max'>
            <Button href="/contact" text="Get in touch" />
          </li>
        </ul>
      </nav>
      <div className={`md:hidden `}>
      <div className={`fixed inset-0 z-10 transition-all w-0 ease-in-out`}/>       
      <div className={`min-w-[24rem] fixed inset-y-0 right-0 z-20 overflow-hidden bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full transform transition-all ease-in-out ${mobileMenuOpen ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-10'} duration-500`}>

            <div className="flex items-center justify-between   ">
              <Link href="/" className="-m-1.5 pt-1 select-none">
                <span className="sr-only">Your Company</span>
                <img className="h-16" src="/img/navbar/logo2.png" alt="Logo" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
            
              </button>
            </div>
            <div className="mt-6 "  >
              <div className='border-b border-gray-300 p-5'>
            <DropList name={'Services'} DataLink={services} mobileMenuOpen={true}/>
            </div>
            {links.map((link) => (
              
            <div key={link.href} className='border-b border-gray-300 p-5'>
              
              <Link href={link.href} className='no-underline text-base font-semibold leading-6 text-xl text-gray-900'>

                {link.text}

              </Link>
            </div>
          ))}
          < div className='flex justify-end my-12'> 
                <Button href="/contact" text="Get in touch" />
              </div>
            </div>
          </div>
   
        </div>
    </header>
  );
};

export default Navbar;