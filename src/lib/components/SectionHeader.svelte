<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		align?: 'center' | 'left';
		id?: string;
	}

	let { eyebrow, title, subtitle, align = 'center', id }: Props = $props();
</script>

<div class="mb-16 max-w-3xl {align === 'center' ? 'mx-auto text-center' : 'text-left'}">
	{#if eyebrow}
		<p class="mb-4 text-sm font-medium tracking-widest text-accent uppercase">{eyebrow}</p>
	{/if}
	<h2 {id} class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
	{/if}
</div>
