<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import {
		ArrowLeftRight,
		Check,
		Database,
		Link2,
		Plug,
		ShoppingBag,
		Store,
		type Icon
	} from '@lucide/svelte';
	import SectionHeader from './SectionHeader.svelte';
	import GlassCard from './GlassCard.svelte';
	import {
		integrationConnectors,
		integrationDataEntities,
		integrationPrimary,
		sections
	} from '$lib/data/content';

	const connectorIconMap: Record<string, typeof Icon> = {
		database: Database,
		store: Store,
		'shopping-bag': ShoppingBag,
		link: Link2
	};
</script>

<section
	id="integrations"
	class="section-padding relative overflow-hidden"
	aria-labelledby="integrations-heading"
>
	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			id="integrations-heading"
			eyebrow={sections.integrations.eyebrow}
			title={sections.integrations.title}
			subtitle={sections.integrations.subtitle}
		/>

		<motion.div
			class="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 p-8 lg:p-10"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div
				class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
				aria-hidden="true"
			></div>

			<div class="relative grid gap-8 lg:grid-cols-2 lg:gap-12">
				<div>
					<div class="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
						<Plug size={14} />
						{integrationPrimary.badge}
					</div>

					<h3 class="text-2xl font-semibold text-foreground sm:text-3xl">
						{integrationPrimary.title}
					</h3>
					<p class="mt-1 text-sm font-medium text-accent">{integrationPrimary.subtitle}</p>
					<p class="mt-4 leading-relaxed text-muted">{integrationPrimary.description}</p>

					<div class="mt-6 flex flex-wrap gap-3">
						<span class="rounded-lg border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground">
							{integrationPrimary.protocol}
						</span>
						<span class="rounded-lg border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground">
							{integrationPrimary.syncMode}
						</span>
					</div>
				</div>

				<div class="rounded-xl border border-line bg-surface/40 p-6">
					<h4 class="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
						<ArrowLeftRight size={16} class="text-accent" />
						{integrationPrimary.dataTitle}
					</h4>
					<ul class="grid gap-2.5 sm:grid-cols-2">
						{#each integrationDataEntities as entity}
							<li class="flex items-start gap-2 text-sm text-muted">
								<Check size={16} class="mt-0.5 shrink-0 text-emerald-400" />
								{entity}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</motion.div>

		<div class="mt-12">
			<h3 class="mb-6 text-center text-lg font-semibold text-foreground">
				{sections.integrations.connectorsTitle}
			</h3>

			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each integrationConnectors as connector, i}
					{@const IconComponent = connectorIconMap[connector.icon]}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-40px' }}
						transition={{ delay: i * 0.08, duration: 0.4 }}
					>
						<GlassCard class="h-full">
							<div
								class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary"
							>
								<IconComponent size={20} />
							</div>
							<h4 class="font-semibold text-foreground">{connector.title}</h4>
							<p class="mt-2 text-sm leading-relaxed text-muted">{connector.description}</p>
							{#if connector.examples}
								<p class="mt-3 text-xs text-muted/80">{connector.examples}</p>
							{/if}
						</GlassCard>
					</motion.div>
				{/each}
			</div>
		</div>
	</div>
</section>
