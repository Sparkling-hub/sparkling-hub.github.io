import Link from 'next/link';
import React from 'react';

interface ButtonProps {
	href: string;
	text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<Link className="no-underline text-white py-3 px-8 bg-gradient-to-r from-teal-500 to-teal-500 rounded-3xl" href={href}>
			{text}
		</Link>
	);
};

export default Button;
