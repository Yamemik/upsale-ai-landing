<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { Menu, X } from '@lucide/svelte';
	import { brand, navLinks } from '$lib/data/content';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<motion.header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'border-b border-border bg-bg/70 backdrop-blur-xl'
		: 'bg-transparent'}"
	initial={{ y: -20, opacity: 0 }}
	animate={{ y: 0, opacity: 1 }}
	transition={{ duration: 0.5 }}
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main">
		<a href="/" class="group flex items-center gap-2.5">
			<span
				class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-lg shadow-primary/25"
			>
				U
			</span>
			<span class="text-lg font-semibold tracking-tight text-text">{brand.name}</span>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm text-text-muted transition-colors hover:text-text"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden md:block">
			<a
				href="#contact"
				class="btn-primary inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium"
			>
				Request Demo
			</a>
		</div>

		<button
			type="button"
			class="rounded-lg p-2 text-text-muted hover:bg-card hover:text-text md:hidden"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			{#if mobileOpen}
				<X size={22} />
			{:else}
				<Menu size={22} />
			{/if}
		</button>
	</nav>

	{#if mobileOpen}
		<motion.div
			class="border-b border-border bg-bg/95 px-6 py-4 backdrop-blur-xl md:hidden"
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: 'auto' }}
			transition={{ duration: 0.25 }}
		>
			<div class="flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm text-text-muted transition-colors hover:text-text"
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
				<a href="#contact" class="btn-primary text-center text-sm font-medium" onclick={closeMobile}>
					Request Demo
				</a>
			</div>
		</motion.div>
	{/if}
</motion.header>
