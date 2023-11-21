import Link from 'next/link';
import Button from '../button';

const Navbar: React.FC = () => {
  return (
    <div className='container mx-auto px-4 '>
      <nav className='flex justify-between px-20 py-4'>

        <a href="/" title="Back to Home flex w-1/2">
          <img src='/img/navbar/logo2.png' alt="Logo" className="logo_img w-1/3" />
        </a>

        <ul className='flex w-1/2 justify-between py-4'>
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
          <li>
            <Link className="no-underline text-white py-3 px-8 bg-gradient-to-r from-teal-900 to-teal-300 rounded-3xl" href="/get-in-touch">Get in touch</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};


export default Navbar;