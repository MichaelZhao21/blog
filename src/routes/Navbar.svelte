<script lang="ts">
	import { page } from '$app/stores';
	const buttonStyle =
		'md:text-3xl text-xl text-grey font-title flex-end md:px-4 px-2';
</script>

<div class="flex flex-row items-center md:py-4 py-2">
	<a href="/">
		<img src="/bear.png" alt="bear logo" class="h-8 mr-4" />
	</a>
	<a href="/" class="md:text-3xl text-xl text-brown font-title">
		michael zhao
	</a>
	<div class="flex-grow" />
	<a href="/" class={`${buttonStyle} ${$page.url.pathname === '/' ? 'text-brown-3' : ''}`}>
		home
	</a>
	<a
		href="https://michaelzhao.xyz"
		target="_blank"
		class={buttonStyle}>
		about me
	</a>
</div>
