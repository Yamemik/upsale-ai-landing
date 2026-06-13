<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { ArrowDown, Database, Server } from '@lucide/svelte';
	import SectionHeader from './SectionHeader.svelte';
	import { architectureLayers, sections, techBadges } from '$lib/data/content';
</script>

<section id="architecture" class="section-padding relative overflow-hidden" aria-labelledby="arch-heading">
	<div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden="true"></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			id="arch-heading"
			eyebrow={sections.architecture.eyebrow}
			title={sections.architecture.title}
			subtitle={sections.architecture.subtitle}
		/>

		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="flex flex-col items-center">
				{#each architectureLayers as layer, i}
					<motion.div
						class="flow-node w-full max-w-md"
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-40px' }}
						transition={{ delay: i * 0.1, duration: 0.5 }}
					>
						<div class="glass-card flex items-center gap-4 rounded-xl border border-line p-5">
							<div
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg {i === 0
									? 'bg-accent/15 text-accent'
									: i === architectureLayers.length - 1
										? 'bg-primary/15 text-primary'
										: 'bg-card text-muted'}"
							>
								{#if i === 0}
									<Database size={18} />
								{:else if i === 1}
									<Server size={18} />
								{:else}
									<span class="text-xs font-bold">{i + 1}</span>
								{/if}
							</div>
							<div>
								<h3 class="font-semibold text-foreground">{layer.label}</h3>
								<p class="text-sm text-muted">{layer.description}</p>
							</div>
						</div>
					</motion.div>

					{#if i < architectureLayers.length - 1}
						<motion.div
							class="my-2 flex flex-col items-center text-primary/50"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 + 0.05 }}
						>
							<div class="flow-line h-6 w-px bg-gradient-to-b from-primary/50 to-accent/50"></div>
							<ArrowDown size={16} class="animate-pulse" />
						</motion.div>
					{/if}
				{/each}
			</div>

			<motion.div
				class="glass-card rounded-2xl border border-line p-8"
				initial={{ opacity: 0, x: 24 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h3 class="text-lg font-semibold text-foreground">{sections.architecture.techTitle}</h3>
				<p class="mt-2 text-sm text-muted">
					{sections.architecture.techSubtitle}
				</p>

				<div class="mt-8 flex flex-wrap gap-3">
					{#each techBadges as badge, i}
						<motion.span
							class="rounded-lg border border-line bg-surface/60 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.06 }}
							whileHover={{ scale: 1.05, borderColor: 'rgba(79, 70, 229, 0.4)' }}
						>
							{badge}
						</motion.span>
					{/each}
				</div>

				<div class="mt-10 space-y-4 rounded-xl border border-line bg-surface/40 p-5">
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted">{sections.architecture.apiLatency}</span>
						<span class="font-medium text-emerald-400">142ms</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted">{sections.architecture.modelRegistry}</span>
						<span class="font-medium text-foreground">Hybrid v2.4</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted">{sections.architecture.skuCoverage}</span>
						<span class="font-medium text-foreground">12,400+</span>
					</div>
					<div class="h-1.5 overflow-hidden rounded-full bg-border">
						<motion.div
							class="h-full rounded-full bg-gradient-to-r from-primary to-accent"
							initial={{ width: '0%' }}
							whileInView={{ width: '94%' }}
							viewport={{ once: true }}
							transition={{ duration: 1.2, delay: 0.3 }}
						></motion.div>
					</div>
					<p class="text-xs text-muted">{sections.architecture.uptime}</p>
				</div>
			</motion.div>
		</div>
	</div>
</section>
