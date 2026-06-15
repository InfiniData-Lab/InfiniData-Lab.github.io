<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getProjects, getPublications, bySlug } from '$lib/content';
	import {
		IconArrowLeft,
		IconFileText,
		IconBrandGithub,
		IconExternalLink,
		IconDatabase,
		IconWorld
	} from '@tabler/icons-svelte';

	let { data } = $props();
	const entry = bySlug(getProjects(), data.slug)!;
	const p = entry.meta;
	const Body = entry.component;
	// Publications that share a pillar with this project.
	const related = getPublications().filter((pub) =>
		pub.meta.pillars?.some((x) => p.pillars?.includes(x))
	);
</script>

<Seo title={p.name} description={p.tagline} />

<article class="detail">
	<div class="container narrow">
		<a class="back" href="/projects"><IconArrowLeft size={16} /> All projects</a>
		{#if p.tagline}<span class="eyebrow">{p.tagline}</span>{/if}
		<h1>{p.name}</h1>

		{#if p.venue || p.award || p.tags?.length}
			<div class="tags">
				{#if p.venue}<span class="tag venue">{p.venue}</span>{/if}
				{#if p.award}<span class="tag award">{p.award}</span>{/if}
				{#each p.tags ?? [] as t}<span class="tag">{t}</span>{/each}
			</div>
		{/if}

		{#if p.links}
			<div class="links">
				{#if p.links.paper}<a class="btn btn-ghost btn-sm" href={p.links.paper}><IconFileText size={16} /> Paper</a>{/if}
				{#if p.links.github}<a class="btn btn-ghost btn-sm" href={p.links.github}><IconBrandGithub size={16} /> Code</a>{/if}
				{#if p.links.dataset}<a class="btn btn-ghost btn-sm" href={p.links.dataset}><IconDatabase size={16} /> Dataset</a>{/if}
				{#if p.links.demo}<a class="btn btn-ghost btn-sm" href={p.links.demo}><IconExternalLink size={16} /> Demo</a>{/if}
				{#if p.links.website}<a class="btn btn-ghost btn-sm" href={p.links.website}><IconWorld size={16} /> Website</a>{/if}
			</div>
		{/if}

		<Prose><Body /></Prose>

		{#if related.length}
			<h2 class="rel">Related publications</h2>
			<ul class="rel-list">
				{#each related as r (r.slug)}
					<li><a href="/publications/{r.slug}">{r.meta.title}</a> <span>· {r.meta.venue} {r.meta.year}</span></li>
				{/each}
			</ul>
		{/if}
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
	h1 {
		font-size: clamp(32px, 4.6vw, 48px);
		margin: 12px 0 18px;
	}
	.tags {
		margin-bottom: 20px;
	}
	.links {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-bottom: 34px;
	}
	.rel {
		font-size: 20px;
		margin: 40px 0 14px;
		padding-top: 28px;
		border-top: 1px solid var(--line);
	}
	.rel-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.rel-list a {
		color: var(--ink);
		font-weight: 450;
	}
	.rel-list a:hover {
		color: var(--brand-2);
	}
	.rel-list span {
		color: var(--faint);
		font-size: 14px;
	}
</style>
