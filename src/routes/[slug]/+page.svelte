<script lang="ts">
	import Navbar from "../Navbar.svelte";

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} | Michael's Blog</title>
</svelte:head>

<Navbar />

<article>
	<h1>{data.metadata.title}</h1>
	<p>{data.metadata.date}&nbsp; · &nbsp;{data.readingTime} min read </p>
	<div class="tags">
		{#each data.metadata.tags.split(',') as tag}
			<span class="tag">{tag.trim()}</span>
		{/each}
	</div>
	<div class="content">
		{@html data.content}
	</div>
</article>

<style>
	.tags {
		margin-bottom: 1rem;
	}
	.tag {
		background-color: #eee;
		padding: 0.2rem 0.5rem;
		margin-right: 0.5rem;
		border-radius: 0.25rem;
	}
</style>
