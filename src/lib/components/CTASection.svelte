<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { ArrowRight, Mail } from '@lucide/svelte';
</script>

<section id="contact" class="section-padding" aria-labelledby="cta-heading">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<motion.div
			class="relative overflow-hidden rounded-3xl border border-border"
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
		>
			<div class="cta-glow absolute inset-0" aria-hidden="true"></div>
			<div class="grid-pattern absolute inset-0 opacity-20" aria-hidden="true"></div>

			<div class="relative px-8 py-16 text-center sm:px-16 sm:py-24">
				<motion.h2
					id="cta-heading"
					class="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
				>
					Make Smarter Inventory Decisions
				</motion.h2>
				<motion.p
					class="mx-auto mt-4 max-w-2xl text-lg text-text-muted"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
				>
					Leverage AI to improve forecasting accuracy, reduce waste, and increase profitability.
				</motion.p>

				<motion.div
					class="mt-10 flex flex-wrap items-center justify-center gap-4"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<a href="mailto:hello@upsale.ai" class="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium">
						Request Demo
						<ArrowRight size={16} />
					</a>
					<a
						href="mailto:sales@upsale.ai"
						class="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-8 py-3.5 text-sm font-medium text-text backdrop-blur-sm transition-colors hover:bg-card"
					>
						<Mail size={16} />
						Contact Sales
					</a>
				</motion.div>
			</div>
		</motion.div>
	</div>
</section>
