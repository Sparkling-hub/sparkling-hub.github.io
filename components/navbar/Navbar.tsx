import React, { useState } from 'react';
import Link from 'next/link';
import DropList from "../ui/drop-list-navbar/drop-list-navbar"
import Button from '../button';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { href: '/services', text: 'Services' },
    { href: '/about', text: 'About Us' },
    { href: '/startup', text: 'Start Up' },
    { href: '/careers', text: 'Careers' },
    { href: '/faq', text: 'FAQ' },
  ];
  return (
    <header className="bg-white sticky top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/img/navbar/logo2.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle mobile menu</span>
            <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2  z-30 transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${ mobileMenuOpen?'rotate-45': ' -translate-y-1.5'}`}></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${mobileMenuOpen ?'opacity-0': '' } `}></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${mobileMenuOpen ? '-rotate-45':' translate-y-1.5'}`}></span>
                </div>
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => (
            <li key={link.href} className='ml-4 flex items-center'>
              <Link href={link.href} className='no-underline text-base font-semibold leading-6 text-gray-900'>

                {link.text}

              </Link>
            </li>
          ))}

     
 

          <li>
            <Button href="/contact" text="Get in touch" />
          </li>
        </ul>
      </nav>
      <div className={`lg:hidden `}>
      <div className={`fixed inset-0 z-10 transition-all w-0 ease-in-out`}/>       
      <div className={`fixed inset-y-0 right-0 z-20 overflow-hidden bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full transform transition-all ease-in-out ${mobileMenuOpen ? 'translate-x-0 opacity-95' : 'translate-x-full opacity-10'} duration-500`}>
        
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 select-none">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="/img/navbar/logo2.png" alt="Logo" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
            
              </button>
            </div>
            <div className="mt-6 ">
                       <DropList name={'Services'} DataLink={services}/>
            {links.map((link) => (
            <div key={link.href} className='border-b border-gray-300 p-5'>
              
              <Link href={link.href} className='no-underline text-base font-semibold leading-6 text-gray-900'>

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