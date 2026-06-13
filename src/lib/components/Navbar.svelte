<script lang="ts">
	import { motion } from '@humanspeak/svelte-motion';
	import { base } from '$app/paths';
	import { Menu, X } from '@lucide/svelte';
	import { brand, navLinks, ui } from '$lib/data/content';

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

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'border-b border-line bg-surface/70 backdrop-blur-xl'
		: 'bg-transparent'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label={ui.mainNav}>
		<a href="{base}/" class="group flex items-center gap-2.5">
			<img
				src="{base}/logo.png"
				alt={brand.name}
				class="h-9 w-9 rounded-lg object-cover shadow-lg shadow-primary/25"
				width="36"
				height="36"
			/>
			<span class="text-lg font-semibold tracking-tight text-foreground">{brand.name}</span>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a href={link.href} class="text-sm text-muted transition-colors hover:text-foreground">
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden md:block">
			<a href="#contact" class="btn-primary inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium">
				{ui.requestDemo}
			</a>
		</div>

		<button
			type="button"
			class="rounded-lg p-2 text-muted hover:bg-card hover:text-foreground md:hidden"
			aria-label={mobileOpen ? ui.closeMenu : ui.openMenu}
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
			class="border-b border-line bg-surface/95 px-6 py-4 backdrop-blur-xl md:hidden"
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: 'auto' }}
			transition={{ duration: 0.25 }}
		>
			<div class="flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm text-muted transition-colors hover:text-foreground"
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
				<a href="#contact" class="btn-primary text-center text-sm font-medium" onclick={closeMobile}>
					{ui.requestDemo}
				</a>
			</div>
		</motion.div>
	{/if}
</header>
