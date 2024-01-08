import Link from 'next/link';
import DropList from "../ui/drop-list-navbar/drop-list-navbar"
import Button from '../button';

const Navbar: React.FC = () => {
  const services = [
    { href: '/faq', text: 'FAQ' },
    { href: '/team-augmentation', text: 'Team Augmentation' },
    { href: '/software-development', text: 'Software Development' },
  ];
  
  return (
    <div id='navbar' className=' content-section mx-auto xl:px-40 custom-3xl z-20'>
      <nav className='flex justify-between px-20 py-4 min-w-[900px] text-center '>
        <Link href="/" className='h-full w-[20%]' title="Back to Home " >
          <img className="w-full"  src='/img/navbar/logo2.png' alt="Logo" />
        </Link>
        <ul className='flex justify-between py-4 whitespace-nowrap'>
          {/* <li>
            <Link className="no-underline p-4" href="/">Home</Link>
          </li> */}
   
          <DropList name={'services'} DataLink={services}/>
       
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