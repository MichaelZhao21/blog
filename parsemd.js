import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import fs from 'fs';
import showdown from 'showdown';

dayjs.extend(customParseFormat);

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

	// For each post, read the markdown file, convert it to a svelte component, and write it to gen-posts
	await Promise.all(
		posts.map(async (post) => {
			const postName = post.replace('.md', '');
			const postContent = fs.readFileSync(`posts/${post}`, 'utf-8');

			const converter = new showdown.Converter({ metadata: true });
			const code = converter.makeHtml(postContent);
			const data = converter.getMetadata();

			// Write html
			fs.writeFileSync(`src/gen-posts/${postName}.html`, code);

			// Add to metadata
			postMetadata.push({ ...data, readingTime: computeReadingTime(postContent) });
		}),
	);

	// Make sure there are no duplicates
	checkDuplicateSlugs(postMetadata);

	// Sort posts.json by date (dates are in format September 25th, 2024)
	postMetadata.sort((a, b) => {
		const dateA = dayjs(a.date, 'MMMM Do, YYYY');
		const dateB = dayjs(b.date, 'MMMM Do, YYYY');
		return dateB.diff(dateA);
	});

	// Write the metadata to posts.json
	fs.writeFileSync('src/gen-posts/posts.json', JSON.stringify(postMetadata));
}

main();

// Calculate the amount of time it takes to read, in minutes
function computeReadingTime(input) {
	const wc = calcWords(input);
	return Math.round(wc / 200);
}

// Calculate the number of words in a string, stripping non alphanumeric characters
function calcWords(input) {
	// Replace all non-alphanumeric characters
	const replaced = input.replaceAll(/[^A-Za-z0-9 ]/g, '');
	const split = replaced
		.split(' ')
		.map((s) => s.trim())
		.filter((s) => s !== '');
	return split.length;
}

// Check if any slugs are duplicated in the post metadata array
function checkDuplicateSlugs(posts) {
	const slugs = new Map();
	for (const post of posts) {
		if (slugs.has(post.slug)) {
			throw new Error(`Duplicate slug: ${post.slug}. Posts: ${slugs.get(post.slug)}, ${post.title}`);
		}
		slugs.set(post.slug, post.title);
	}
}