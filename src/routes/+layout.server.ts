import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals  }) => {
	return {
		theme: locals.theme,
		url: url.pathname
	};
};
