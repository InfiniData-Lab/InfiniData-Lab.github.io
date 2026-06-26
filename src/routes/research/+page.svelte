<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import PublicationItem from '$lib/components/PublicationItem.svelte';
	import { getProjects, getPublications } from '$lib/content';
	import { IconStack2, IconAtom2 } from '@tabler/icons-svelte';

	const pillars = [
		{
			id: 'AI in Data Lakes',
			kicker: 'Data Systems for AI',
			icon: IconStack2,
			blurb: 'We bring machine learning and data lakes together: integrating scattered, heterogeneous data into ML-ready training sets, discovering and selecting models from large model zoos, serving large language models straight from a database, and generating synthetic data across organisational silos without sharing raw records.'
		},
		{
			id: 'Quantum Data Management',
			kicker: 'Data Systems for Quantum Computing',
			icon: IconAtom2,
			blurb: 'We reinvent data management for the quantum era — simulating quantum circuits inside a relational database, compiling database queries to quantum primitives, and charting how data should be stored, queried, and managed on noisy intermediate-scale (NISQ) quantum processors.'
		}
	];

	const projects = getProjects();
	const pubs = getPublications();
	const projFor = (id: string) => projects.filter((p) => p.meta.pillars?.includes(id));
	const pubFor = (id: string) => pubs.filter((p) => p.meta.pillars?.includes(id));
</script>

<Seo title="Research" description="Two research directions at Infinidata Lab: data systems for AI (AI in data lakes) and data systems for quantum computing (quantum data management)." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">What we work on</span>
		<h1>Research</h1>
		<p>Everything we build is a data system. Our research runs in two directions — making data systems work for AI, and inventing data systems for quantum computing.</p>
	</div>
</header>

<div class="container">
	{#each pillars as pillar, i (pillar.id)}
		{@const Icon = pillar.icon}
		{@const ps = projFor(pillar.id)}
		{@const pl = pubFor(pillar.id)}
		<section class="pillar" class:divided={i > 0}>
			<div class="pillar-head">
				<div class="ic"><Icon size={26} /></div>
				<div>
					<span class="eyebrow">{pillar.kicker}</span>
					<h2>{pillar.id}</h2>
					<p>{pillar.blurb}</p>
				</div>
			</div>

			{#if ps.length}
				<h3 class="sub">Projects</h3>
				<div class="grid grid-2">
					{#each ps as project (project.slug)}<ProjectCard entry={project} />{/each}
				</div>
			{/if}

			{#if pl.length}
				<h3 class="sub">Selected publications</h3>
				<div class="pub-list">
					{#each pl as pub (pub.slug)}<PublicationItem entry={pub} />{/each}
				</div>
			{/if}
		</section>
	{/each}
</div>

<style>
	.pillar {
		padding: 40px 0 8px;
	}
	.divided {
		border-top: 1px solid var(--line);
		padding-top: 48px;
	}
	.pillar-head {
		display: flex;
		gap: 18px;
		align-items: flex-start;
		margin-bottom: 28px;
		max-width: 70ch;
	}
	.pillar-head .ic {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		display: grid;
		place-items: center;
		flex-shrink: 0;
		color: var(--brand-2);
		background: color-mix(in srgb, var(--brand) 16%, transparent);
		border: 1px solid var(--line-2);
	}
	.pillar-head h2 {
		font-size: clamp(24px, 3vw, 32px);
		margin-bottom: 8px;
	}
	.pillar-head p {
		color: var(--muted);
	}
	.pillar-head .eyebrow {
		display: block;
		margin-bottom: 8px;
	}
	.sub {
		font-family: var(--font-mono);
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--faint);
		font-weight: 500;
		margin: 28px 0 16px;
	}
	.pub-list {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
</style>
