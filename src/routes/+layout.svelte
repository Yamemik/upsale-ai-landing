<script lang="ts">
	import { base } from '$app/paths';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="{base}/logo.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
