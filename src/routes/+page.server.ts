import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
// TODO: Remove when mdsvex fixes their damn package
// @ts-ignore
import { compile } from 'mdsvex';
import { computeReadingTime } from '../functions';

export async function load() {
	const postsDirectory = path.join(process.cwd(), 'src', 'posts');

	// Read all posts' metadata
	const files = fs.readdirSync(postsDirectory);
	const notTestFiles = files.filter(f => f !== "test.md");
	const posts = await Promise.all(notTestFiles.map(async (file) => {
		const filePath = path.join(postsDirectory, file);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { _, data } = await compile(fileContent);
		return {
			slug: file.replace(/\.md$/, ''),
			meta: data.fm,
			readingTime: computeReadingTime(fileContent),
		};
	}));

	return {
		posts,
	};
}
