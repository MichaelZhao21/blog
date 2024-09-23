import fs from 'fs';
import { compile } from 'mdsvex';

// Script to parse the markdown in `posts` directory, convert them to svelte components, and put them in gen-posts folder in `src`
// We will also generate a posts.json file that contains the metadata of the posts
// This should be done each time a markdown post is added
async function main() {
	// Read the posts directory
	const posts = fs.readdirSync('posts');

	// Create the gen-posts directory
	fs.mkdirSync('src/gen-posts', { recursive: true, ignoreExisting: true });

	// Create the posts.json file
	const postMetadata = [];
	const names = [];

	// For each post, read the markdown file, convert it to a svelte component, and write it to gen-posts
	await Promise.all(
		posts.map(async (post) => {
			const postName = post.replace('.md', '');
			const postContent = fs.readFileSync(`posts/${post}`, 'utf-8');
			const { code, data } = await compile(postContent);
            const modCode = code.replace(/<script.*\/script>/s, '');
			fs.writeFileSync(`src/gen-posts/${postName}.html`, modCode);

			// Extract the metadata from the markdown
			postMetadata.push({ ...data.fm, readingTime: computeReadingTime(postContent) });
			names.push(postName);
		}),
	);
    return;

	// Write the metadata to posts.json
	fs.writeFileSync('src/gen-posts/posts.json', JSON.stringify(postMetadata));

	// Write the Posts.svelte file
	let postsSvelte = `<script lang="ts">\n`;
	names.forEach((name) => {
		postsSvelte += `import ${name} from './${name}.svelte';\n`;
	});
	postsSvelte += `export const posts = [${names.join(',')}];\n`;
	postsSvelte += `</script>\n\n`;
	fs.writeFileSync('src/gen-posts/Posts.svelte', postsSvelte);
}

main();

// Calculate the amount of time it takes to read, in minutes
export function computeReadingTime(input) {
	const wc = calcWords(input);
	return Math.round(wc / 200);
}

// Calculate the number of words in a string, stripping non alphanumeric characters
export function calcWords(input) {
	// Replace all non-alphanumeric characters
	const replaced = input.replaceAll(/[^A-Za-z0-9 ]/g, '');
	const split = replaced
		.split(' ')
		.map((s) => s.trim())
		.filter((s) => s !== '');
	return split.length;
}
