import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
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
          <li>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/startup" className="text-sm font-semibold leading-6 text-gray-900">
              Start Up
            </Link>
          </li>
          <li>
            <Link href="/careers" className="text-sm font-semibold leading-6 text-gray-900">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-sm font-semibold leading-6 text-gray-900">
              FAQ
            </Link>
          </li>
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
          <div className="fixed inset-y-0 right-0 z-20 w-full max-w-xs overflow-hidden bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
            <div className="mt-6 space-y-4">
              <Link href="/services" className="block text-base font-semibold leading-6 text-gray-900">
                Services
              </Link>
              <Link href="/about" className="block text-base font-semibold leading-6 text-gray-900">
                About Us
              </Link>
              <Link href="/startup" className="block text-base font-semibold leading-6 text-gray-900">
                Start Up
              </Link>
              <Link href="/careers" className="block text-base font-semibold leading-6 text-gray-900">
                Careers
              </Link>
              <Link href="/faq" className="block text-base font-semibold leading-6 text-gray-900">
                FAQ
              </Link>
              <div className='flex justify-center'>
              <Button  href="/contact" text="Get in touch" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
