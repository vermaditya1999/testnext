import axios from 'axios';

import CommentCard from 'components/CommentCard';

export default function Comment({ comment }) {
	return (
		<div className="p-4 flex w-screen h-screen items-center justify-center">
			<div className="flex flex-col items-center -mt-16">
				<p className="text-5xl font-bold text-gray-700">JSON Placeholder</p>
				<p className="text-3xl mt-6 text-violet-500">comment #{comment.id}</p>
				<div className="mt-16">
					<CommentCard
						id={comment.id}
						name={comment.name}
						email={comment.email}
						body={comment.body}
					/>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({ params }) {
	const id = Number(params.id);

	if (!id || id < 1 || id > 100) {
		return {
			notFound: true
		};
	}

	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/comments/${id}`
	);
	const comment = res.data;

	return {
		props: {
			comment
		}
	};
}
