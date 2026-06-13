<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		hover?: boolean;
		delay?: number;
		children: Snippet;
	}

	let { class: className = '', hover = true, delay = 0, children }: Props = $props();
</script>

<motion.div
	class="glass-card rounded-2xl border border-border p-6 {className}"
	initial={{ opacity: 0, y: 20 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true, margin: '-60px' }}
	transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
	whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
>
	{@render children()}
</motion.div>
