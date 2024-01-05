import Link from 'next/link';
import Button from '../button';

const Navbar: React.FC = () => {
  return (
    <div id='navbar' className=' content-section mx-auto xl:px-40 custom-3xl'>
      <nav className='flex justify-between px-20 py-4 min-w-[900px] text-center '>
        <Link href="/" className='h-full w-2/6' title="Back to Home " >
          <img className="w-full"  src='/img/navbar/logo2.png' alt="Logo" />
        </Link>
        <ul className='flex justify-between py-4 whitespace-nowrap'>
          {/* <li>
            <Link className="no-underline p-4" href="/">Home</Link>
          </li> */}
          <li>
            <Link className="no-underline p-4" href="/services">Services</Link>
          </li>
          <li>
            <Link className="no-underline p-4" href="/about">About Us</Link>
          </li>          
          <li>
            <Link className="no-underline p-4" href="/startup">Start Up</Link>
          </li>
          <li>
            <Link className="no-underline p-4" href="/careers">Careers</Link>
          </li>
          <li>
            <Link className="no-underline p-4" href="/faq">FAQ</Link>
          </li>
          <li>
              <Button  href = "/contact" text = "Get in touch"/>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};


export default Navbar;