// TODO: Remove when mdsvex fixes their damn package
// @ts-ignore
import { compile } from 'mdsvex';
import { computeReadingTime } from '../functions';

// Use import.meta.glob to get all markdown files
const posts = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

// Regex to extract the slug
const slugRegex = /src\/posts\/(.*)\.md/g

export async function load() {
	const notTestFiles = Object.entries(posts).filter((f) => f[0] !== "/src/posts/test.md");
	const postData = await Promise.all(notTestFiles.map(async (file) => {
		const { _, data } = await compile(file[1]);
		const slug = slugRegex.exec(file[0]) as RegExpExecArray;

		return {
			slug: slug[1],
			meta: data.fm,
			readingTime: computeReadingTime(file[1] as string),
		};
	}));

	return {
		posts: postData,
	};
}
