<script>
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="container">
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	:global(:root) {
		font-family: 'Open Sans', sans-serif;
		line-height: 1.5;
		font-weight: 400;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		font-family: 'Rubik', sans-serif;
		padding: 0;
		margin: 0;
		color: var(--text-light);
	}

	:global(div),
	:global(p),
	:global(a),
	:global(button) {
		color: var(--text);
	}

	:global(html),
	:global(body) {
		margin: 0;
		background-color: var(--bg);
	}

	/* Light theme */
	:global(body) {
		--bg: #f2f0eb;
		--text-light: #1b1f26;
		--text: #000000;
		--primary: #ae2eeb;
	}

	/* Dark theme */
	:global(body.dark) {
		--bg: #1b1f26;
		--text-light: #f2f0eb;
		--text: #dddddd;
		--primary: #da95fb;
	}

	.container {
		width: calc(1200px + 2rem);
		margin: 0 auto;
	}

	/* Container on ipad */
	@media (max-width: 1200px) {
		.container {
			width: calc(100% - 2rem);
			padding: 0 1rem;
		}
	}
</style>
