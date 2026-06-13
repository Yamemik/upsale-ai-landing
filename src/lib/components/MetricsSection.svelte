<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import SectionHeader from './SectionHeader.svelte';
	import AnimatedCounter from './AnimatedCounter.svelte';
	import GlassCard from './GlassCard.svelte';
	import { metrics, sections, techStack } from '$lib/data/content';
</script>

<section id="results" class="section-padding" aria-labelledby="results-heading">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			id="results-heading"
			eyebrow={sections.results.eyebrow}
			title={sections.results.title}
			subtitle={sections.results.subtitle}
		/>

		<div class="mb-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each metrics as metric, i}
				<GlassCard hover={false} class="text-center !p-8">
					<p class="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
						<AnimatedCounter
							value={metric.value}
							prefix={metric.prefix}
							suffix={metric.suffix}
							duration={1.6 + i * 0.2}
						/>
					</p>
					<h3 class="mt-3 text-base font-semibold text-foreground">{metric.label}</h3>
					<p class="mt-1 text-sm text-muted">{metric.description}</p>
				</GlassCard>
			{/each}
		</div>

		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div class="mb-10 text-center">
				<h3 class="text-2xl font-semibold text-foreground sm:text-3xl">{sections.results.techTitle}</h3>
				<p class="mt-2 text-muted">{sections.results.techSubtitle}</p>
			</div>

			<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
				{#each techStack as tech, i}
					<motion.div
						class="group rounded-xl border border-line bg-card/50 p-5 text-center backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.06 }}
						whileHover={{ y: -4 }}
					>
						<p class="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
							{tech.name}
						</p>
						<p class="mt-1 text-xs text-muted">{tech.category}</p>
					</motion.div>
				{/each}
			</div>
		</motion.div>
	</div>
</section>
