import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
// TODO: Remove when mdsvex fixes their damn package
// @ts-ignore
import { compile } from 'mdsvex';
import { computeReadingTime } from '../../functions.js';

export async function load({ params }) {
	const { slug } = params;
	const postsDirectory = path.join(process.cwd(), 'src', 'posts');
	const filePath = path.join(postsDirectory, `${slug}.md`);

	try {
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { code, data } = await compile(fileContent);
		const readingTime = computeReadingTime(fileContent);

		return {
			content: code,
			metadata: data.fm,
			readingTime,
		};
	} catch (err) {
		throw error(404, `Could not find post ${slug}`);
	}
}
