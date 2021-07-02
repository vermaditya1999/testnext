import LinkButton from 'components/LinkButton';

export default function CommentCard({ id, name, email, body }) {
	return (
		<div className="min-h-96 max-w-prose text-gray-800 rounded-xl shadow-xl p-8">
			<div className="text-3xl line-clamp-1">{name}</div>
			<div className="mt-2 text-sm text-gray-400">{email}</div>
			<div className="mt-4 text-justify text-lg text-gray-600 line-clamp-2">
				{body}
			</div>
			<div className="flex justify-between mt-8">
				<LinkButton link={`/comments/${id - 1}`} disabled={id <= 1}>
					&larr; Previous
				</LinkButton>
				<LinkButton link={`/comments/${id + 1}`} disabled={id >= 100}>
					Next &rarr;
				</LinkButton>
			</div>
		</div>
	);
}
