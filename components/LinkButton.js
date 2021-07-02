import Link from 'next/link';

export default function LinkButton({ link, children, disabled }) {
	return (
		<Link href={disabled ? '#' : link}>
			<a
				className={`${
					disabled ? 'text-gray-400' : 'text-violet-500 hover:text-violet-600'
				}`}>
				{children}
			</a>
		</Link>
	);
}
