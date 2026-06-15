<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getPublications, bySlug } from '$lib/content';
	import { internalAuthors } from '$lib/config';
	import {
		IconArrowLeft,
		IconFileText,
		IconLink,
		IconBrandGithub,
		IconDatabase,
		IconExternalLink,
		IconPresentation
	} from '@tabler/icons-svelte';

	let { data } = $props();
	const entry = bySlug(getPublications(), data.slug)!;
	const p = entry.meta;
	const Body = entry.component;
</script>

<Seo title={p.title} description={`${p.authors.join(', ')} — ${p.venue} ${p.year}`} />

<article class="detail">
	<div class="container narrow">
		<a class="back" href="/publications"><IconArrowLeft size={16} /> All publications</a>

		<div class="meta">
			<span class="tag venue">{p.venue}&nbsp;{p.year}</span>
			{#if p.award}<span class="tag award">{p.award}</span>{/if}
			{#each p.pillars ?? [] as pil}<span class="tag">{pil}</span>{/each}
		</div>

		<h1>{p.title}</h1>

		<p class="authors">
			{#each p.authors as a, i}<span class:me={internalAuthors.includes(a)}>{a}</span>{#if i < p.authors.length - 1}<span>,&nbsp;</span>{/if}{/each}
		</p>

		{#if p.links}
			<div class="links">
				{#if p.links.pdf}<a class="btn btn-ghost btn-sm" href={p.links.pdf}><IconFileText size={16} /> PDF</a>{/if}
				{#if p.links.doi}<a class="btn btn-ghost btn-sm" href={p.links.doi}><IconLink size={16} /> DOI</a>{/if}
				{#if p.links.arxiv}<a class="btn btn-ghost btn-sm" href={p.links.arxiv}><IconFileText size={16} /> arXiv</a>{/if}
				{#if p.links.code}<a class="btn btn-ghost btn-sm" href={p.links.code}><IconBrandGithub size={16} /> Code</a>{/if}
				{#if p.links.dataset}<a class="btn btn-ghost btn-sm" href={p.links.dataset}><IconDatabase size={16} /> Dataset</a>{/if}
				{#if p.links.slides}<a class="btn btn-ghost btn-sm" href={p.links.slides}><IconPresentation size={16} /> Slides</a>{/if}
				{#if p.links.video}<a class="btn btn-ghost btn-sm" href={p.links.video}><IconExternalLink size={16} /> Video</a>{/if}
			</div>
		{/if}

		<Prose><Body /></Prose>
	</div>
</article>

<style>
	.detail {
		padding: 48px 0 8px;
	}
	.narrow {
		max-width: 820px;
	}
	.back {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		color: var(--muted);
		font-size: 14px;
		margin-bottom: 26px;
	}
	.back:hover {
		color: var(--brand-2);
	}
	.meta {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		margin-bottom: 16px;
	}
	h1 {
		font-size: clamp(26px, 3.6vw, 38px);
		line-height: 1.2;
		margin-bottom: 16px;
	}
	.authors {
		color: var(--muted);
		font-size: 16px;
		margin-bottom: 26px;
	}
	.authors .me {
		color: var(--ink);
		font-weight: 500;
	}
	.links {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-bottom: 34px;
	}
</style>
