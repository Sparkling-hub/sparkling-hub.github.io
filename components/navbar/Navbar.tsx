import Link from 'next/link';
import Button from '../button';

const Navbar: React.FC = () => {
  return (
    <div className='container mx-auto px-4 '>
      <nav className='flex justify-between px-20 py-4'>

        
        <Link href="/" title="Back to Home flex w-1/2">
          <img src='/img/navbar/logo2.png' alt="Logo" className="logo_img w-1/3" />
        </Link>

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
            <Link className="no-underline p-4" href="/startup">Careers</Link>
          </li>
          <li>
            <Link className="no-underline p-4" href="/startup">FAQ</Link>
          </li>
          <li>
              <Button  href = "/get-in-touch" text = "Get in touch"/>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};


export default Navbar;