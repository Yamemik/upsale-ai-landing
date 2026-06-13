<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { ArrowRight, CheckCircle2, Eye, Shield } from '@lucide/svelte';
	import SectionHeader from './SectionHeader.svelte';
	import { governanceFlows, sections } from '$lib/data/content';

	const colorMap = {
		emerald: {
			bg: 'bg-emerald-500/10',
			border: 'border-emerald-500/20',
			text: 'text-emerald-400',
			glow: 'shadow-emerald-500/10'
		},
		amber: {
			bg: 'bg-amber-500/10',
			border: 'border-amber-500/20',
			text: 'text-amber-400',
			glow: 'shadow-amber-500/10'
		},
		rose: {
			bg: 'bg-rose-500/10',
			border: 'border-rose-500/20',
			text: 'text-rose-400',
			glow: 'shadow-rose-500/10'
		}
	} as const;
</script>

<section class="section-padding relative overflow-hidden" aria-labelledby="governance-heading">
	<div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" aria-hidden="true"></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			id="governance-heading"
			eyebrow={sections.governance.eyebrow}
			title={sections.governance.title}
			subtitle={sections.governance.subtitle}
		/>

		<div class="grid gap-6 lg:grid-cols-3">
			{#each governanceFlows as flow, i}
				{@const colors = colorMap[flow.color as keyof typeof colorMap]}
				<motion.div
					class="glass-card relative rounded-2xl border {colors.border} p-6 shadow-lg {colors.glow}"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: i * 0.12, duration: 0.5 }}
					whileHover={{ y: -6, transition: { duration: 0.2 } }}
				>
					{#if i < governanceFlows.length - 1}
						<div class="absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 lg:block" aria-hidden="true">
							<ArrowRight size={20} class="text-muted/40" />
						</div>
					{/if}

					<div class="mb-4 flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg {colors.bg}">
							{#if i === 0}
								<CheckCircle2 size={20} class={colors.text} />
							{:else if i === 1}
								<Eye size={20} class={colors.text} />
							{:else}
								<Shield size={20} class={colors.text} />
							{/if}
						</div>
						<span class="rounded-full border border-line px-2.5 py-0.5 text-xs font-mono text-muted">
							{flow.threshold}
						</span>
					</div>

					<h3 class="text-lg font-semibold text-foreground">{flow.level}</h3>
					<div class="my-3 flex items-center gap-2">
						<ArrowRight size={14} class={colors.text} />
						<span class="text-base font-medium {colors.text}">{flow.action}</span>
					</div>
					<p class="text-sm leading-relaxed text-muted">{flow.description}</p>
				</motion.div>
			{/each}
		</div>

		<motion.div
			class="mt-12 rounded-2xl border border-line bg-card/40 p-6 backdrop-blur-sm sm:p-8"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay: 0.4 }}
		>
			<div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
					<Shield size={24} class="text-primary" />
				</div>
				<div class="flex-1">
					<p class="font-medium text-foreground">{sections.governance.auditTitle}</p>
					<p class="mt-1 text-sm text-muted">
						{sections.governance.auditDescription}
					</p>
				</div>
			</div>
		</motion.div>
	</div>
</section>
