<script lang="ts">
	import {
		Boxes,
		Brain,
		LayoutDashboard,
		LineChart,
		Plug,
		ShieldCheck,
		type Icon
	} from '@lucide/svelte';
	import SectionHeader from './SectionHeader.svelte';
	import GlassCard from './GlassCard.svelte';
	import { features } from '$lib/data/content';

	const iconMap: Record<string, typeof Icon> = {
		'line-chart': LineChart,
		boxes: Boxes,
		brain: Brain,
		'shield-check': ShieldCheck,
		plug: Plug,
		'layout-dashboard': LayoutDashboard
	};
</script>

<section id="platform" class="section-padding" aria-labelledby="features-heading">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			eyebrow="Platform"
			title="Everything You Need to Forecast and Optimize"
			subtitle="A complete intelligence stack — from raw sales data to governed, explainable inventory decisions."
		/>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature, i}
				{@const IconComponent = iconMap[feature.icon]}
				<GlassCard delay={i * 0.07} class="group">
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-colors group-hover:from-primary/30 group-hover:to-accent/20"
					>
						<IconComponent size={22} />
					</div>
					<h3 id="features-heading" class="text-lg font-semibold text-text">{feature.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
				</GlassCard>
			{/each}
		</div>
	</div>
</section>
