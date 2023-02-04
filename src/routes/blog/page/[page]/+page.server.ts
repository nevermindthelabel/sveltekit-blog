import type { PageServerLoad } from './$types';
// import { postsPerPage } from '$lib/config';
// import fetchPosts from '$lib/assets/js/fetchPosts';
import { fetchThePosts } from '$lib/utils/posts';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, params, fetch }) => {
	console.log(url);
	const page = Number.isFinite(params.page) ? params.page : 1;

	// Keeps from duplicationg the blog index route as page 1
	if (page <= 1) {
		throw redirect(301, '/blog');
	}

	// let offset = page * postsPerPage - postsPerPage;

	// const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
	// const total = await totalPostsRes.json();
	// const { posts } = await fetchPosts({ offset, page });
	const test = await fetchThePosts();
	console.log(test);

	return {
		// posts,
		// page,
		// totalPosts: total
	};
};
