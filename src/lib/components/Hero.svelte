<script lang="ts">
	import { ArrowRight, Sparkles, TrendingUp } from '@lucide/svelte';
	import { hero, heroMetrics, ui } from '$lib/data/content';

	const chartBars = [42, 58, 45, 72, 68, 85, 78, 92, 88, 95, 82, 98];
</script>

<section class="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
	<div class="hero-glow pointer-events-none absolute inset-0" aria-hidden="true"></div>
	<div class="grid-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
			<div>
				<span
					class="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
				>
					<Sparkles size={14} class="text-accent" />
					{hero.badge}
				</span>

				<h1
					class="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
				>
					{hero.title}
					<span class="gradient-text block">{hero.titleAccent}</span>
				</h1>

				<p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
					{hero.subtitle}
				</p>

				<div class="mt-10 flex flex-wrap gap-4">
					<a href="#contact" class="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
						{ui.requestDemo}
						<ArrowRight size={16} />
					</a>
					<a
						href="#platform"
						class="inline-flex items-center gap-2 rounded-lg border border-line bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
					>
						{ui.explorePlatform}
					</a>
				</div>
			</div>

			<div class="relative">
				<div class="dashboard-glow absolute -inset-4 rounded-3xl opacity-60 blur-2xl" aria-hidden="true"></div>
				<div class="glass-card relative overflow-hidden rounded-2xl border border-line p-1 shadow-2xl">
					<div class="rounded-xl bg-card p-5 sm:p-6">
						<div class="mb-5 flex items-center justify-between">
							<div>
								<p class="text-xs font-medium tracking-wider text-muted uppercase">{hero.dashboard.analytics}</p>
								<p class="mt-0.5 text-sm font-medium text-foreground">{hero.dashboard.intelligence}</p>
							</div>
							<span
								class="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
							>
								<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
								{ui.live}
							</span>
						</div>

						<div class="mb-6 grid grid-cols-2 gap-3">
							{#each heroMetrics as metric}
								<div class="rounded-xl border border-line bg-surface/50 p-3.5">
									<p class="text-xs text-muted">{metric.label}</p>
									<p class="mt-1 text-lg font-semibold text-foreground">{metric.value}</p>
									<p class="mt-0.5 text-xs {metric.positive ? 'text-emerald-400' : 'text-rose-400'}">
										{metric.change}
									</p>
								</div>
							{/each}
						</div>

						<div class="rounded-xl border border-line bg-surface/30 p-4">
							<div class="mb-3 flex items-center justify-between">
								<span class="text-xs font-medium text-muted">{hero.dashboard.revenueTrend}</span>
								<TrendingUp size={14} class="text-accent" />
							</div>
							<div class="flex h-24 items-end gap-1.5">
								{#each chartBars as height}
									<div
										class="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-accent/80"
										style="height: {height}%"
									></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
