<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProblemSection from '$lib/components/ProblemSection.svelte';
	import FeaturesSection from '$lib/components/FeaturesSection.svelte';
	import ArchitectureSection from '$lib/components/ArchitectureSection.svelte';
	import AISection from '$lib/components/AISection.svelte';
	import GovernanceSection from '$lib/components/GovernanceSection.svelte';
	import MetricsSection from '$lib/components/MetricsSection.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { brand } from '$lib/data/content';
</script>

<svelte:head>
	<title>{brand.name} — {brand.tagline}</title>
	<meta name="description" content={brand.description} />
	<meta property="og:title" content="{brand.name} — AI Demand Forecasting" />
	<meta property="og:description" content={brand.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{brand.name} — AI Demand Forecasting" />
	<meta name="twitter:description" content={brand.description} />
</svelte:head>

<Navbar />
<main>
	<Hero />
	<ProblemSection />
	<FeaturesSection />
	<ArchitectureSection />
	<AISection />
	<GovernanceSection />
	<MetricsSection />
	<CTASection />
</main>
<Footer />
