import React, { useState } from 'react';
import Link from 'next/link';
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
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Mobile menu content */}
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-20 w-full overflow-hidden bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="/img/navbar/logo2.png" alt="Logo" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 ">
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
      )}
    </header>
  );
};

export default Navbar;
