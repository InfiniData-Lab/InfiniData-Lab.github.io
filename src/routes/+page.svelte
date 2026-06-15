<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import PublicationItem from '$lib/components/PublicationItem.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { getProjects, getPublications, featured } from '$lib/content';
	import { site } from '$lib/config';
	import { IconArrowRight, IconStack2, IconShieldLock, IconAtom2 } from '@tabler/icons-svelte';

	const projects = featured(getProjects()).slice(0, 4);
	const pubs = getPublications().slice(0, 3);
</script>

<Seo />

<header class="hero">
	<div class="container">
		<span class="hero-badge"><span class="dot"></span> TU Delft · Web Information Systems</span>
		<h1>Data management for the <span class="grad-text">age of AI</span>.</h1>
		<p class="hero-sub">{site.description}</p>
		<div class="hero-actions">
			<a class="btn btn-primary" href="/research">Explore our research <IconArrowRight size={18} /></a>
			<a class="btn btn-ghost" href="/people">Meet the team</a>
		</div>
		<div class="hero-meta">
			<span>Led by <b>Dr. Rihan Hai</b>, Assistant Professor</span>
			<span><b>30+</b> papers at SIGMOD · VLDB · ICDE</span>
			<span><b>NWO VENI</b> laureate</span>
		</div>
	</div>
</header>

<section class="section">
	<div class="container">
		<div class="section-head">
			<div>
				<span class="eyebrow">What we work on</span>
				<h2>Three research frontiers</h2>
				<p>We rethink how data is integrated, shared, and processed — from the model lake to the quantum processor.</p>
			</div>
		</div>
		<div class="grid grid-3">
			<div class="card">
				<div class="ic"><IconStack2 size={24} /></div>
				<h3>AI in Data &amp; Model Lakes</h3>
				<p>Bringing data integration and machine learning together, so heterogeneous data and rich model zoos meet in one lake.</p>
			</div>
			<div class="card">
				<div class="ic"><IconShieldLock size={24} /></div>
				<h3>Federated &amp; Private Learning</h3>
				<p>Training and synthetic-data generation across organisational silos — without ever sharing the raw data.</p>
			</div>
			<div class="card">
				<div class="ic"><IconAtom2 size={24} /></div>
				<h3>Quantum Data Management</h3>
				<p>Reimagining query optimisation, entity matching, and anomaly detection for the NISQ-era quantum processor.</p>
			</div>
		</div>
	</div>
</section>

<section class="section pt0">
	<div class="container">
		<div class="section-head">
			<div>
				<span class="eyebrow">Selected work</span>
				<h2>Featured projects</h2>
			</div>
			<a class="link-arrow" href="/projects">All projects <IconArrowRight size={16} /></a>
		</div>
		<div class="grid grid-2">
			{#each projects as project (project.slug)}
				<ProjectCard entry={project} />
			{/each}
		</div>
	</div>
</section>

<section class="section pt0">
	<div class="container">
		<div class="section-head">
			<div>
				<span class="eyebrow">Latest publications</span>
				<h2>Fresh from the lab</h2>
			</div>
			<a class="link-arrow" href="/publications">All publications <IconArrowRight size={16} /></a>
		</div>
		<div class="pub-list">
			{#each pubs as pub (pub.slug)}
				<PublicationItem entry={pub} />
			{/each}
		</div>
	</div>
</section>

<section class="section pt0">
	<div class="container">
		<CtaBand
			title="Curious about data systems, ML, or quantum?"
			body="We're always looking for sharp PhD and MSc students. Thesis topics and open positions are posted year-round."
			cta="See open positions"
			href="/join"
		/>
	</div>
</section>

<style>
	.pt0 {
		padding-top: 0;
	}
	.pub-list {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.hero {
		position: relative;
		overflow: hidden;
		padding: 96px 0 84px;
	}
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background:
			radial-gradient(680px 360px at 18% -8%, color-mix(in srgb, var(--brand) 34%, transparent), transparent 70%),
			radial-gradient(620px 420px at 92% 8%, color-mix(in srgb, var(--brand-2) 26%, transparent), transparent 68%);
	}
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		opacity: 0.5;
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 56px 56px;
		mask-image: radial-gradient(700px 380px at 50% 0%, #000 30%, transparent 75%);
		-webkit-mask-image: radial-gradient(700px 380px at 50% 0%, #000 30%, transparent 75%);
	}
	.hero :global(.container) {
		position: relative;
		z-index: 1;
	}
	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 6px 14px 6px 12px;
		border-radius: 999px;
		border: 1px solid var(--line-2);
		background: color-mix(in srgb, var(--surface) 60%, transparent);
		font-size: 13px;
		color: var(--muted);
		margin-bottom: 26px;
	}
	.hero-badge .dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--brand-2);
		box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand-2) 22%, transparent);
	}
	.hero h1 {
		font-size: clamp(40px, 6.2vw, 70px);
		max-width: 16ch;
		margin-bottom: 22px;
	}
	.hero-sub {
		font-size: clamp(17px, 2vw, 20px);
		color: var(--muted);
		max-width: 60ch;
		margin-bottom: 34px;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 13px;
		align-items: center;
	}
	.hero-meta {
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		gap: 26px 40px;
		align-items: center;
		color: var(--faint);
		font-size: 14px;
	}
	.hero-meta b {
		color: var(--ink);
		font-weight: 500;
	}
</style>
