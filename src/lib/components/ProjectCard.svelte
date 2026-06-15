<script lang="ts">
	import type { Entry } from '$lib/content';
	import type { Project } from '$lib/content/types';
	import {
		IconFileText,
		IconBrandGithub,
		IconExternalLink,
		IconDatabase,
		IconWorld
	} from '@tabler/icons-svelte';

	let { entry }: { entry: Entry<Project> } = $props();
	const p = entry.meta;
	const Body = entry.component;
</script>

<article class="card">
	{#if p.tagline}<p class="tagline">{p.tagline}</p>{/if}
	<h3><a href="/projects/{entry.slug}">{p.name}</a></h3>
	<div class="desc"><Body /></div>

	{#if p.venue || p.award || p.tags?.length}
		<div class="tags">
			{#if p.venue}<span class="tag venue">{p.venue}</span>{/if}
			{#if p.award}<span class="tag award">{p.award}</span>{/if}
			{#each p.tags ?? [] as t}<span class="tag">{t}</span>{/each}
		</div>
	{/if}

	{#if p.links}
		<div class="card-links">
			{#if p.links.paper}<a href={p.links.paper}><IconFileText size={15} /> Paper</a>{/if}
			{#if p.links.github}<a href={p.links.github}><IconBrandGithub size={15} /> Code</a>{/if}
			{#if p.links.dataset}<a href={p.links.dataset}><IconDatabase size={15} /> Data</a>{/if}
			{#if p.links.demo}<a href={p.links.demo}><IconExternalLink size={15} /> Demo</a>{/if}
			{#if p.links.website}<a href={p.links.website}><IconWorld size={15} /> Site</a>{/if}
		</div>
	{/if}
</article>

<style>
	h3 a:hover {
		color: var(--brand-2);
	}
	.desc {
		margin: 0 0 16px;
	}
	.tags {
		margin-bottom: 18px;
	}
</style>
