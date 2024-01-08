import Link from 'next/link';
import Button from '../button';

const Navbar: React.FC = () => {
  return (
    <div id='navbar' className=' content-section mx-auto xl:px-40 custom-3xl'>
      <nav className='flex justify-between px-20 py-4'>
        <Link href="/" className='flex basis-2/5' title="Back to Home " >
          <img className="logo_img"  src='/img/navbar/logo2.png' alt="Logo" />
        </Link>
        <ul className='flex basis-3/5 justify-between py-4'>
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