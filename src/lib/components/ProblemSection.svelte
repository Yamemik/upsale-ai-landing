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
	import { problems, sections } from '$lib/data/content';

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
			id="problem-heading"
			eyebrow={sections.problem.eyebrow}
			title={sections.problem.title}
			subtitle={sections.problem.subtitle}
		/>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each problems as problem, i}
				{@const IconComponent = iconMap[problem.icon]}
				<GlassCard>
					<div class="flex items-start gap-4">
						<div
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
						>
							<IconComponent size={20} />
						</div>
						<div>
							<h3 class="text-base font-semibold text-foreground">{problem.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-muted">{problem.description}</p>
						</div>
					</div>
				</GlassCard>
			{/each}
		</div>
	</div>
</section>
