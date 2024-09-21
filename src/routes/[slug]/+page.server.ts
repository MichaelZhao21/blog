import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
// TODO: Remove when mdsvex fixes their damn package
// @ts-ignore
import { compile } from 'mdsvex';

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

// Calculate the amount of time it takes to read, in minutes
function computeReadingTime(input: string): number {
	const wc = calcWords(input);
	return Math.round(wc / 200);
}

// Calculate the number of words in a string, stripping non alphanumeric characters
function calcWords(input: string): number {
	// Replace all non-alphanumeric characters
	const replaced = input.replaceAll(/[^A-Za-z0-9 ]/g, '');
	const split = replaced.split(" ").map(s => s.trim()).filter(s => s !== "");
	return split.length;
}
