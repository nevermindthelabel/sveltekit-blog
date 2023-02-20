export const fetchThePosts = async () => {
	const thePosts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolve]) => {
			const { metadata } = await resolve();
			const slug = path.split('/').pop()?.slice(0, -3);
			return { ...metadata, slug };
		})
	);
	return { thePosts };
};

export const fetchAPost = async () => {
	const thePosts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolve]) => {
			const { metadata } = await resolve();
			const slug = path.split('/').pop()?.slice(0, -3);
			return { ...metadata, slug };
		})
	);
	console.log(thePosts);
	return { thePosts };
};
