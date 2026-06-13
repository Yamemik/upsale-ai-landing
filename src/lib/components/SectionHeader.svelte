<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';

	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		align?: 'center' | 'left';
	}

	let { eyebrow, title, subtitle, align = 'center' }: Props = $props();
</script>

<motion.div
	class="mb-16 max-w-3xl {align === 'center' ? 'mx-auto text-center' : 'text-left'}"
	initial={{ opacity: 0, y: 24 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true, margin: '-80px' }}
	transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
	{#if eyebrow}
		<p class="mb-4 text-sm font-medium tracking-widest text-accent uppercase">{eyebrow}</p>
	{/if}
	<h2 class="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">{title}</h2>
	{#if subtitle}
		<p class="mt-4 text-lg leading-relaxed text-text-muted">{subtitle}</p>
	{/if}
</motion.div>
