<script lang="ts">
	import ContactLinks from './ContactLinks.svelte';
	import { sections } from '$lib/data/content';
</script>

<section id="contact" class="section-padding" aria-labelledby="cta-heading">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="relative overflow-hidden rounded-3xl border border-line">
			<div class="cta-glow absolute inset-0" aria-hidden="true"></div>
			<div class="grid-pattern absolute inset-0 opacity-20" aria-hidden="true"></div>

			<div class="relative px-8 py-16 sm:px-16 sm:py-24">
				<div class="mx-auto max-w-3xl text-center">
					<h2
						id="cta-heading"
						class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
					>
						{sections.cta.title}
					</h2>
					<p class="mx-auto mt-4 text-lg text-muted">
						{sections.cta.subtitle}
					</p>
				</div>

				<ContactLinks variant="cards" />
			</div>
		</div>
	</div>
</section>
