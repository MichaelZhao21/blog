import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
// TODO: Remove when mdsvex fixes their damn library
// @ts-ignore
import { compile } from 'mdsvex';
import { computeReadingTime } from '../../functions';

// Use import.meta.glob to get all markdown files
const posts = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// Find the post that matches the slug
	const matchingPost = Object.entries(posts).find(([path]) => path === `/src/posts/${slug}.md`);

	if (matchingPost) {
		// Compile the markdown content using mdsvex
		const { code, data } = await compile(matchingPost[1]);

		return {
			content: code,
			metadata: data.fm,
			readingTime: computeReadingTime(matchingPost[1] as string),
		};
	}

	throw error(404, `Could not find post ${slug}`);
};
