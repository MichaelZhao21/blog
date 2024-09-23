<script lang="ts">
	import Navbar from './Navbar.svelte';

	export let data;
</script>

<Navbar />

<h1 class="text-4xl mt-4 mb-2">Recent Posts</h1>

{#each data.posts as d}
	<div class="mb-8">
		<h1 class="text-3xl text-brown-1 duration-200 hover:text-brown-3">
			<a href={`/${d.slug}`}>{d.meta.title}</a>
		</h1>
		<p class="font-bold text-lg text-grey-light mb-2 line-clamp-2">
			{d.meta.date}&nbsp; · &nbsp;{d.readingTime} min read
		</p>
		<p>{d.meta.description}</p>
	</div>
{/each}
