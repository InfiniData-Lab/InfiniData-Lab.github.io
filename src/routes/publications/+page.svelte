<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PublicationItem from '$lib/components/PublicationItem.svelte';
	import type { Entry } from '$lib/content';
	import type { Publication } from '$lib/content/types';
	import { getPublications } from '$lib/content';

	const all = getPublications();
	const pillars = [...new Set(all.flatMap((p) => p.meta.pillars ?? []))];
	const filters = [
		{ id: 'all', label: 'All' },
		{ id: 'conference', label: 'Conference' },
		{ id: 'journal', label: 'Journal' },
		{ id: 'workshop', label: 'Workshop' },
		{ id: 'demo', label: 'Demo' },
		{ id: 'preprint', label: 'Preprint' },
		...pillars.map((p) => ({ id: 'pillar:' + p, label: p }))
	];

	let active = $state('all');

	const matches = (p: Entry<Publication>) => {
		if (active === 'all') return true;
		if (active.startsWith('pillar:')) return p.meta.pillars?.includes(active.slice(7)) ?? false;
		return p.meta.type === active;
	};

	const filtered = $derived(all.filter(matches));
	const years = $derived([...new Set(filtered.map((p) => p.meta.year))].sort((a, b) => b - a));
</script>

<Seo title="Publications" description="Peer-reviewed research from Infinidata Lab at the top venues in data management and machine learning." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Research output</span>
		<h1>Publications</h1>
		<p>Peer-reviewed work at the top venues in data management and machine learning — SIGMOD, VLDB, ICDE, EDBT, and more.</p>
	</div>
</header>

<div class="container" style="padding-bottom: 8px">
	<div class="filters">
		{#each filters as f (f.id)}
			<button class="chip" class:active={active === f.id} onclick={() => (active = f.id)}>{f.label}</button>
		{/each}
	</div>

	{#each years as y (y)}
		<div class="year-row">
			<div class="year-label">{y}</div>
			<div class="pub-list">
				{#each filtered.filter((p) => p.meta.year === y) as pub (pub.slug)}
					<PublicationItem entry={pub} />
				{/each}
			</div>
		</div>
	{/each}

	{#if filtered.length === 0}
		<p class="none">No publications match this filter.</p>
	{/if}
</div>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 9px;
		margin-bottom: 36px;
	}
	.chip {
		font-size: 13.5px;
		padding: 8px 15px;
		border-radius: 999px;
		border: 1px solid var(--line-2);
		background: transparent;
		color: var(--muted);
		cursor: pointer;
		font-family: var(--font-body);
		transition: all 0.15s;
	}
	.chip:hover {
		color: var(--ink);
		border-color: var(--brand);
	}
	.chip.active {
		color: #0a0d1f;
		background-image: var(--grad);
		border-color: transparent;
		font-weight: 500;
	}
	.year-row {
		display: flex;
		gap: 26px;
		margin-bottom: 8px;
	}
	.year-label {
		font-family: var(--font-head);
		font-size: 30px;
		font-weight: 600;
		color: var(--faint);
		width: 90px;
		flex-shrink: 0;
		padding-top: 16px;
	}
	.pub-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin-bottom: 22px;
		min-width: 0;
	}
	.none {
		color: var(--faint);
		text-align: center;
		padding: 40px 0;
	}
	@media (max-width: 620px) {
		.year-row {
			flex-direction: column;
			gap: 8px;
		}
		.year-label {
			width: auto;
			padding-top: 0;
		}
	}
</style>
