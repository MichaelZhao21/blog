<script lang="ts">
	import Navbar from './Navbar.svelte';
	import posts from '../gen-posts/posts.json';

	const filteredPosts = posts.filter((p) => p.slug !== "test");
</script>

<Navbar />

<h1 class="text-4xl mt-4 mb-2">Recent Posts</h1>

{#each filteredPosts as d}
	<div class="mb-8">
		<h1 class="text-3xl text-brown-1 duration-200 hover:text-brown-3">
			<a href={`/${d.slug}`}>{d.title}</a>
		</h1>
		<p class="font-bold text-lg text-grey-light mt-[-0.25rem] mb-1 line-clamp-2">
			{d.date}&nbsp; · &nbsp;{d.readingTime} min read
		</p>
		<p>{d.description}</p>
	</div>
{/each}
