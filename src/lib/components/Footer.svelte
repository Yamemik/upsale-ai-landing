<script lang="ts">
	import { base } from '$app/paths';
	import ContactLinks from './ContactLinks.svelte';
	import { brand, ui } from '$lib/data/content';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line bg-surface">
	<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-8 sm:flex-row">
			<div class="flex items-center gap-3 text-center sm:text-left">
				<img
					src="{base}/logo.png"
					alt={brand.name}
					class="h-10 w-10 rounded-lg object-cover"
					width="40"
					height="40"
				/>
				<div>
					<p class="text-lg font-semibold text-foreground">{brand.name}</p>
					<p class="mt-1 text-sm text-muted">{brand.tagline}</p>
				</div>
			</div>

			<ContactLinks variant="icons" />
		</div>

		<div class="mt-8 border-t border-line pt-8 text-center">
			<p class="text-xs text-muted">
				&copy; {year} {brand.name}. {ui.allRightsReserved}
			</p>
		</div>
	</div>
</footer>
