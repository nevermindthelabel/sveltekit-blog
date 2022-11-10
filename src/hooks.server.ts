import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// console.log(event.cookies.get('theme'));
	// console.log(event.locals.theme);
	const themeCookie = event.cookies.get('theme') as 'light' | 'dark';
	if (themeCookie) {
		event.locals.theme = themeCookie;
	}
	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	// }

	// const response = await resolve(event);
	// return response;
	// await resolve(event);
	return await resolve(event);
};
