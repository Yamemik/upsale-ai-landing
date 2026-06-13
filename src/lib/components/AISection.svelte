<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import {
		Gauge,
		GitBranch,
		RefreshCw,
		Target,
		Wrench,
		type Icon
	} from '@lucide/svelte';
	import SectionHeader from './SectionHeader.svelte';
	import GlassCard from './GlassCard.svelte';
	import { aiCapabilities, modelKpis, sections, shapDrivers, ui } from '$lib/data/content';

	const iconMap: Record<string, typeof Icon> = {
		'git-branch': GitBranch,
		wrench: Wrench,
		gauge: Gauge,
		target: Target,
		'refresh-cw': RefreshCw
	};

	const maxImpact = Math.max(...shapDrivers.map((d) => Math.abs(d.impact)));
</script>

<section id="ai-engine" class="section-padding" aria-labelledby="ai-heading">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			id="ai-heading"
			eyebrow={sections.ai.eyebrow}
			title={sections.ai.title}
			subtitle={sections.ai.subtitle}
		/>

		<div class="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
			{#each aiCapabilities as cap, i}
				{@const IconComponent = iconMap[cap.icon]}
				<GlassCard class="!p-5">
					<IconComponent size={20} class="mb-3 text-accent" />
					<h3 class="text-sm font-semibold text-foreground">{cap.title}</h3>
					<p class="mt-1.5 text-xs leading-relaxed text-muted">{cap.description}</p>
				</GlassCard>
			{/each}
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			<motion.div
				class="glass-card rounded-2xl border border-line p-6 sm:p-8"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div class="mb-6 flex items-center justify-between">
					<div>
						<h3 class="text-lg font-semibold text-foreground">{sections.ai.modelPerformance}</h3>
						<p class="text-sm text-muted">{sections.ai.walkForward}</p>
					</div>
					<div class="flex gap-2">
						<span class="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">CatBoost</span>
						<span class="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">LightGBM</span>
					</div>
				</div>

				<div class="grid grid-cols-3 gap-4">
					{#each modelKpis as kpi, i}
						<motion.div
							class="rounded-xl border border-line bg-surface/50 p-4 text-center"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 + i * 0.1 }}
						>
							<p class="text-2xl font-semibold text-foreground">{kpi.value}</p>
							<p class="mt-1 text-xs text-muted">{kpi.label}</p>
							<p class="mt-0.5 text-xs text-emerald-400">{kpi.trend}</p>
						</motion.div>
					{/each}
				</div>

				<div class="mt-6 rounded-xl border border-line bg-surface/30 p-4">
					<p class="mb-3 text-xs font-medium text-muted uppercase tracking-wider">{sections.ai.forecastVsActual}</p>
					<svg viewBox="0 0 320 100" class="w-full" aria-hidden="true">
						<defs>
							<linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stop-color="#4f46e5" stop-opacity="0.3" />
								<stop offset="100%" stop-color="#4f46e5" stop-opacity="0" />
							</linearGradient>
						</defs>
						<path
							d="M0,70 L40,55 L80,60 L120,40 L160,45 L200,30 L240,35 L280,20 L320,25 L320,100 L0,100 Z"
							fill="url(#forecastGrad)"
						/>
						<polyline
							points="0,70 40,55 80,60 120,40 160,45 200,30 240,35 280,20 320,25"
							fill="none"
							stroke="#4f46e5"
							stroke-width="2"
						/>
						<polyline
							points="0,75 40,58 80,55 120,48 160,42 200,38 240,32 280,28 320,30"
							fill="none"
							stroke="#06b6d4"
							stroke-width="2"
							stroke-dasharray="4 4"
						/>
					</svg>
					<div class="mt-2 flex gap-4 text-xs text-muted">
						<span class="flex items-center gap-1.5"><span class="h-0.5 w-4 bg-primary"></span> {ui.forecast}</span>
						<span class="flex items-center gap-1.5"><span class="h-0.5 w-4 border-t-2 border-dashed border-accent"></span> {ui.actual}</span>
					</div>
				</div>
			</motion.div>

			<motion.div
				class="glass-card rounded-2xl border border-line p-6 sm:p-8"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.15 }}
			>
				<h3 class="text-lg font-semibold text-foreground">{sections.ai.understandPrediction}</h3>
				<p class="mt-1 text-sm text-muted">{sections.ai.shapSubtitle}</p>

				<div class="mt-8 space-y-4">
					{#each shapDrivers as driver, i}
						{@const width = (Math.abs(driver.impact) / maxImpact) * 100}
						{@const positive = driver.impact >= 0}
						<motion.div
							initial={{ opacity: 0, x: 16 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 + i * 0.08 }}
						>
							<div class="mb-1.5 flex items-center justify-between text-sm">
								<span class="text-foreground">{driver.feature}</span>
								<span class="font-mono text-xs {positive ? 'text-emerald-400' : 'text-rose-400'}">
									{positive ? '+' : ''}{(driver.impact * 100).toFixed(0)}%
								</span>
							</div>
							<div class="relative h-2 overflow-hidden rounded-full bg-surface">
								<motion.div
									class="absolute top-0 h-full rounded-full {positive
										? 'left-1/2 bg-gradient-to-r from-primary to-emerald-400'
										: 'right-1/2 bg-gradient-to-l from-rose-400 to-rose-500'}"
									style={positive ? 'left: 50%' : 'right: 50%'}
									initial={{ width: 0 }}
									whileInView={{ width: `${width / 2}%` }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
								></motion.div>
								<div class="absolute left-1/2 top-0 h-full w-px bg-border"></div>
							</div>
						</motion.div>
					{/each}
				</div>

				<p class="mt-6 rounded-lg border border-line bg-surface/40 px-4 py-3 text-xs leading-relaxed text-muted">
					{sections.ai.shapNote}
				</p>
			</motion.div>
		</div>
	</div>
</section>
