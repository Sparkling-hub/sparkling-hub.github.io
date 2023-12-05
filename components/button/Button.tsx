import Link from 'next/link';
import React from 'react';

interface ButtonProps {
	href: string;
	text: string;
	
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<Link className="no-underline text-white py-3 px-10 bg-gradient-to-r from-teal-900 to-teal-300 rounded-3xl" href={href} >{text}</Link>
	);
};

export default Button;
