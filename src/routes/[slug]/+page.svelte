<script lang="ts">
	import Navbar from '../Navbar.svelte';
	import metaList from '../../gen-posts/posts.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// Import highlight JS and theme
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/base16/gruvbox-dark-soft.min.css';

	// Custom languages
	// NOTE: No svelte support (library for language def is outdated and inconsistent with register API)
	import pythonLang from 'highlight.js/lib/languages/python';
	import htmlLang from 'highlight.js/lib/languages/xml';
	hljs.registerLanguage('python', pythonLang);
	hljs.registerLanguage('html', htmlLang);

	export let data;
	let { slug } = $page.params;
	let meta = metaList.find((m) => m.slug === slug) as any;

	// Highlight all code after page loads
	onMount(() => {
		hljs.highlightAll();

		// DISQUIS CONFIG
		var disqus_config = function (this: any) {
			this.page.url = `https://blog.michaelzhao.xyz/${slug}`; // Replace PAGE_URL with your page's canonical URL variable
			this.page.identifier = slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};

		(function () {
			// DON'T EDIT BELOW THIS LINE
			var d = document,
				s = d.createElement('script');
			s.src = 'https://mikey-blog.disqus.com/embed.js';
			s.setAttribute('data-timestamp', (+new Date()).toString());
			(d.head || d.body).appendChild(s);
		})();
	});
</script>

<svelte:head>
	<title>{meta.title} | Michael's Blog</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.tags} />
	<link rel="canonical" href={`https://blog.michaelzhao.xyz/${meta.slug}`} />
	<meta property="og:url" content={`https://blog.michaelzhao.xyz/${meta.slug}`} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:title" content={`${meta.title} | Michael's Blog`} />
	<meta property="og:site_name" content="Michael's Blog" />
	<meta name="twitter:card" content="summary" />

	<!-- TODO: Add dynamically generated picture for site with title and description (see what github does) -->
	<!-- Then put in https://stackoverflow.com/questions/1092329/what-are-the-important-meta-tags-i-must-put-in-my-website these tags -->
</svelte:head>

<Navbar />

<article class="pb-4">
	<h1 class="text-4xl md:text-5xl md:mb-2 mt-4">{meta.title}</h1>
	<p class="font-bold text-grey-light mb-4">
		{meta.date}&nbsp; · &nbsp;{meta.readingTime} min read
	</p>
	<div class="mb-4 flex flex-row flex-wrap gap-2">
		{#each meta.tags.split(',') as tag}
			<span
				class="bg-background-light text-brown-1 rounded-md py-1 px-2 font-bold text-sm"
			>
				{tag.trim()}
			</span>
		{/each}
	</div>
	<div class="content mb-16">
		{@html data.content}
	</div>
	<div id="disqus_thread"></div>
	<noscript>
		Please enable JavaScript to view the
		<a href="https://disqus.com/?ref_noscript">comments powered by Disqus. </a>
	</noscript>
	<script id="dsq-count-scr" src="//mikey-blog.disqus.com/count.js" async></script>
</article>

<button
	class="fixed md:bottom-4 md:right-4 bottom-2 right-2 fill-brown bg-background-light rounded-md drop-shadow-md cursor-pointer hover:fill-brown-2 duration-200 scale-75 md:scale-100"
	on:click={() => scrollTo({ top: 0, behavior: 'smooth' })}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="48px"
		viewBox="0 -960 960 960"
		width="48px"
		class=""
	>
		<path
			d="M316-400q-6.75 0-10.87-4.64-4.13-4.63-4.13-10.81 0-1.55 5-10.55l158-157q3-3 7.06-5 4.07-2 8.94-2 4.88 0 8.94 2t7.06 5l158 157q2 2 3.5 4.76 1.5 2.77 1.5 5.92 0 6.32-4.12 10.82-4.13 4.5-10.88 4.5H316Z"
		/>
	</svg>
</button>

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
		line-height: 1.3;
		color: var(--text);
		margin-bottom: 1rem;
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

	.content :global(img) {
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
	}

	.content :global(figcaption) {
		color: var(--brown-2);
		font-size: 0.75rem;
		margin-top: 0.5rem;
		text-align: center;
	}

	.content > :global(.image) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0.75rem;
		margin-bottom: 0.75rem;
	}

	:global(code) {
		border-radius: 5px;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	:global(a) {
		color: var(--brown-1);
	}

	:global(a:hover) {
		text-decoration: underline;
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

		.content > :global(.image) {
			margin-top: 1.5rem;
			margin-bottom: 1.5rem;
		}

		.content :global(figcaption) {
			font-size: 0.9rem;
			margin-top: 0.75rem;
		}
	}
</style>
