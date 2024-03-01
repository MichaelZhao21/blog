<script>
	let darkText = 'light mode';
	function changeTheme() {
		document.body.classList.toggle('dark');
		darkText = document.body.classList.contains('dark') ? 'light mode' : 'dark mode';
	}
</script>

<div class="navbar">
	<h1 class="name">🐢 michael zhao</h1>
	<div class="right">
		<a href="/" class="navlink">home</a>
		<a href="https://michaelzhao.xyz" class="navlink">about me</a>
		<a href="/admin" class="navlink">admin</a>
		<button class="navlink" on:click={changeTheme}>
			{darkText}
		</button>
	</div>
</div>

<style>
	.name {
		flex-grow: 1;
	}

	.navbar {
		padding-top: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		width: 100%;
	}

	.right {
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
	}

	.navlink {
		margin: 0 1rem;
		font-size: 1.25rem;
		color: var(--primary);
		border: none;
		background: transparent;
		cursor: pointer;

		text-decoration: underline;
		text-decoration-color: transparent;
		-webkit-text-decoration-color: transparent;
		-moz-text-decoration-color: transparent;
		transition: 200ms;
	}

	.navlink:hover {
		text-decoration: underline;
		text-decoration-color: var(--primary);
		-webkit-text-decoration-color: var(--primary);
		-moz-text-decoration-color: var(--primary);
	}

	/* Phone screen */
	@media (max-width: 600px) {
		.navbar {
			flex-direction: column;
			align-items: start;
		}

		.navlink {
			margin: 0 0.5rem;
		}

		.navlink:first-child {
			margin-left: 0;
		}
	}
</style>
