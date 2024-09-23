<script lang="ts">
	import Navbar from '../Navbar.svelte';
	import metaList from '../../gen-posts/posts.json';
	import { page } from '$app/stores';

	export let data;
	let { slug } = $page.params;
	let meta = metaList.find((m) => m.slug === slug) as any;
</script>

<svelte:head>
	<title>{meta.title} | Michael's Blog</title>
</svelte:head>

<Navbar />

<article class="pb-4">
	<h1 class="text-3xl md:text-5xl">{meta.title}</h1>
	<p class="font-bold text-grey-light mb-4">
		{meta.date}&nbsp; · &nbsp;{meta.readingTime} min read
	</p>
	<div>
		{#each meta.tags.split(',') as tag}
			<span
				class="bg-background-light text-brown-1 rounded-md py-1 px-2 font-bold mr-4 text-sm"
			>
				{tag.trim()}
			</span>
		{/each}
	</div>
	<div class="content">
		{@html data.content}
	</div>
</article>

<style>
	.content > :global(h1) {
		font-size: 2.25rem;
		color: var(--brown);
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		line-height: 90%;
	}

	.content > :global(h2) {
		font-size: 1.75rem;
		color: var(--brown-1);
		margin-top: 1.75rem;
		margin-bottom: 0.5rem;
	}

	.content > :global(h3) {
		font-size: 1.5rem;
		color: var(--brown-2);
		margin-top: 1.25rem;
		margin-bottom: 0.25rem;
	}

	.content > :global(p) {
		font-size: 1rem;
		color: var(--text);
		margin-bottom: 0.75rem;
	}

	.content > :global(ul) {
		list-style: inside !important;
		margin-left: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.content > :global(ol) {
		list-style: decimal inside !important;
		margin-left: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.content > :global(li) {
		font-size: 1rem;
	}

	@media (min-width: 768px) {
		.content > :global(h1) {
			font-size: 2.5rem;
		}

		.content > :global(h2) {
			font-size: 2rem;
		}

		.content > :global(h3) {
			font-size: 1.75rem;
		}

		.content > :global(p) {
			font-size: 1.15rem;
		}

		.content > :global(ol),
		.content > :global(ul) {
			font-size: 1.15rem;
		}
	}
</style>
