import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link className="text-blue-500 hover:text-blue-700 line-through	" href="/">Home</Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-700 no-underline" href="/about">About Us</Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-700 no-underline" href="/services">Services</Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-700 no-underline" href="/startup">Startup</Link>
        </li>        
      </ul>
    </nav>

    <div className="text-blue-500">
      test
    </div>
    </>
  );
};


export default Navbar;