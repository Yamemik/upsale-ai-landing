<script lang="ts">
	import {
		ClipboardList,
		Clock,
		EyeOff,
		PackageX,
		TrendingDown,
		Warehouse,
		type Icon
	} from '@lucide/svelte';
	import SectionHeader from './SectionHeader.svelte';
	import GlassCard from './GlassCard.svelte';
	import { problems } from '$lib/data/content';

	const iconMap: Record<string, typeof Icon> = {
		'package-x': PackageX,
		warehouse: Warehouse,
		'trending-down': TrendingDown,
		'clipboard-list': ClipboardList,
		clock: Clock,
		'eye-off': EyeOff
	};
</script>

<section class="section-padding" aria-labelledby="problem-heading">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<SectionHeader
			eyebrow="The Challenge"
			title="The Cost of Uncertainty"
			subtitle="Retail and distribution leaders lose millions to inventory misalignment. Traditional forecasting can't keep pace with modern demand complexity."
		/>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each problems as problem, i}
				{@const IconComponent = iconMap[problem.icon]}
				<GlassCard delay={i * 0.08}>
					<div class="flex items-start gap-4">
						<div
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
						>
							<IconComponent size={20} />
						</div>
						<div>
							<h3 id="problem-heading" class="text-base font-semibold text-text">{problem.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-text-muted">{problem.description}</p>
						</div>
					</div>
				</GlassCard>
			{/each}
		</div>
	</div>
</section>
