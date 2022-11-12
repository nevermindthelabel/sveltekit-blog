import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const themeCookie = event.cookies.get('theme') as 'light' | 'dark';
	if (themeCookie) {
		event.locals.theme = themeCookie;
	}

	return await resolve(event);
};
