import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { compile } from 'mdsvex';

export async function load({ params }) {
	const { slug } = params;
	const postsDirectory = path.join(process.cwd(), 'src', 'posts');
	const filePath = path.join(postsDirectory, `${slug}.md`);

	try {
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { code, data } = await compile(fileContent);

		return {
			content: code,
			metadata: data.fm,
		};
	} catch (err) {
		throw error(404, `Could not find post ${slug}`);
	}
}
