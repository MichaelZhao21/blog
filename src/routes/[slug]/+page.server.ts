import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import posts from '../../gen-posts/posts.json';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	if (posts.find(p => p.slug === slug)) {
		const files = await import.meta.glob('/src/gen-posts/*.html', { query: '?raw', import: 'default' });
		return {
			content: await files[`/src/gen-posts/${slug}.html`](),
		};
	}

	throw error(404, `Could not find post ${slug}`);
};
