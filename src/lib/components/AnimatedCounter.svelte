<script lang="ts">
	import { animate } from '@humanspeak/svelte-motion';

	interface Props {
		value: number;
		prefix?: string;
		suffix?: string;
		duration?: number;
	}

	let { value, prefix = '', suffix = '', duration = 1.8 }: Props = $props();

	let display = $state(0);
	let node: HTMLSpanElement | undefined = $state();
	let hasAnimated = $state(false);

	$effect(() => {
		if (!node || hasAnimated) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting && !hasAnimated) {
					hasAnimated = true;
					animate(0, value, {
						duration,
						ease: [0.22, 1, 0.36, 1],
						onUpdate: (v) => {
							display = Math.round(v);
						}
					});
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	});
</script>

<span bind:this={node} class="tabular-nums">
	{prefix}{display}{suffix}
</span>
