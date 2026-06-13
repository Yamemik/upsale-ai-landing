<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { ArrowRight, Sparkles, TrendingUp } from '@lucide/svelte';
	import { heroMetrics } from '$lib/data/content';

	const chartBars = [42, 58, 45, 72, 68, 85, 78, 92, 88, 95, 82, 98];
</script>

<section class="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
	<div class="hero-glow pointer-events-none absolute inset-0" aria-hidden="true"></div>
	<div class="grid-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
			<div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span
						class="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-text-muted backdrop-blur-sm"
					>
						<Sparkles size={14} class="text-accent" />
						Enterprise AI Forecasting Platform
					</span>
				</motion.div>

				<motion.h1
					class="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl lg:leading-[1.1]"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					Transform Sales Forecasting
					<span class="gradient-text block">with AI</span>
				</motion.h1>

				<motion.p
					class="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Forecast demand, optimize inventory, and automate planning using advanced machine
					learning and explainable AI.
				</motion.p>

				<motion.div
					class="mt-10 flex flex-wrap gap-4"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<a href="#contact" class="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
						Request Demo
						<ArrowRight size={16} />
					</a>
					<a
						href="#platform"
						class="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 text-sm font-medium text-text backdrop-blur-sm transition-colors hover:bg-card"
					>
						Explore Platform
					</a>
				</motion.div>
			</div>

			<motion.div
				class="relative"
				initial={{ opacity: 0, x: 40, scale: 0.96 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
			>
				<div class="dashboard-glow absolute -inset-4 rounded-3xl opacity-60 blur-2xl" aria-hidden="true"></div>
				<div class="glass-card relative overflow-hidden rounded-2xl border border-border p-1 shadow-2xl">
					<div class="rounded-xl bg-card p-5 sm:p-6">
						<div class="mb-5 flex items-center justify-between">
							<div>
								<p class="text-xs font-medium tracking-wider text-text-muted uppercase">Analytics</p>
								<p class="mt-0.5 text-sm font-medium text-text">Demand Intelligence</p>
							</div>
							<span class="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
								<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
								Live
							</span>
						</div>

						<div class="mb-6 grid grid-cols-2 gap-3">
							{#each heroMetrics as metric, i}
								<motion.div
									class="rounded-xl border border-border bg-bg/50 p-3.5"
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + i * 0.08 }}
								>
									<p class="text-xs text-text-muted">{metric.label}</p>
									<p class="mt-1 text-lg font-semibold text-text">{metric.value}</p>
									<p class="mt-0.5 text-xs {metric.positive ? 'text-emerald-400' : 'text-rose-400'}">
										{metric.change}
									</p>
								</motion.div>
							{/each}
						</div>

						<div class="rounded-xl border border-border bg-bg/30 p-4">
							<div class="mb-3 flex items-center justify-between">
								<span class="text-xs font-medium text-text-muted">Revenue Trend — 12 weeks</span>
								<TrendingUp size={14} class="text-accent" />
							</div>
							<div class="flex h-24 items-end gap-1.5">
								{#each chartBars as height, i}
									<motion.div
										class="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-accent/80"
										initial={{ height: 0 }}
										animate={{ height: `${height}%` }}
										transition={{ delay: 0.7 + i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
									></motion.div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	</div>
</section>
