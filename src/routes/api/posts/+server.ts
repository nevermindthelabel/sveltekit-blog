import { fetchThePosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const { thePosts } = await fetchThePosts();
	return json({ thePosts });
};
