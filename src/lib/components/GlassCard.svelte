<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		hover?: boolean;
		children: Snippet;
	}

	let { class: className = '', hover = true, children }: Props = $props();
</script>

<div
	class="glass-card rounded-2xl border border-line p-6 transition-transform duration-200 {hover
		? 'hover:-translate-y-1'
		: ''} {className}"
>
	{@render children()}
</div>
