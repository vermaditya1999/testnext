export default function Home() {
	return <></>;
}

export async function getServerSideProps() {
	return {
		redirect: {
			destination: '/comments/1'
		}
	};
}
