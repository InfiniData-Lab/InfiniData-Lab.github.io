<script lang="ts">
	import type { Entry } from '$lib/content';
	import type { Publication } from '$lib/content/types';
	import { internalAuthors } from '$lib/config';
	import {
		IconFileText,
		IconLink,
		IconQuote,
		IconBrandGithub,
		IconDatabase,
		IconExternalLink
	} from '@tabler/icons-svelte';

	let { entry, link = true }: { entry: Entry<Publication>; link?: boolean } = $props();
	const p = entry.meta;
</script>

<article class="pub">
	<h4>
		{#if link}<a href="/publications/{entry.slug}">{p.title}</a>{:else}{p.title}{/if}
	</h4>
	<p class="authors">
		{#each p.authors as a, i}<span class:me={internalAuthors.includes(a)}>{a}</span>{#if i < p.authors.length - 1}<span class="sep">, </span>{/if}{/each}
	</p>
	<div class="pub-foot">
		<span class="tag venue">{p.venue}{#if p.year}&nbsp;{p.year}{/if}</span>
		{#if p.award}<span class="tag award">{p.award}</span>{/if}
		{#if p.links}
			<span class="links">
				{#if p.links.pdf}<a href={p.links.pdf}><IconFileText size={14} /> PDF</a>{/if}
				{#if p.links.doi}<a href={p.links.doi}><IconLink size={14} /> DOI</a>{/if}
				{#if p.links.arxiv}<a href={p.links.arxiv}><IconFileText size={14} /> arXiv</a>{/if}
				{#if p.links.code}<a href={p.links.code}><IconBrandGithub size={14} /> Code</a>{/if}
				{#if p.links.dataset}<a href={p.links.dataset}><IconDatabase size={14} /> Data</a>{/if}
				{#if p.links.video}<a href={p.links.video}><IconExternalLink size={14} /> Video</a>{/if}
			</span>
		{/if}
	</div>
</article>

<style>
	.pub {
		background: var(--surface);
		border: 1px solid var(--line);
		border-left: 3px solid transparent;
		border-radius: var(--radius);
		padding: 20px 22px;
		transition:
			border-color 0.18s,
			transform 0.12s;
	}
	.pub:hover {
		border-color: var(--line-2);
		border-left-color: var(--brand-2);
	}
	h4 {
		font-size: 17.5px;
		line-height: 1.3;
		margin-bottom: 7px;
	}
	h4 a:hover {
		color: var(--brand-2);
	}
	.authors {
		font-size: 14px;
		color: var(--muted);
		margin-bottom: 12px;
	}
	.authors .me {
		color: var(--ink);
		font-weight: 500;
	}
	.pub-foot {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-wrap: wrap;
	}
	.links {
		display: flex;
		gap: 14px;
		margin-left: auto;
		font-size: 13px;
		flex-wrap: wrap;
	}
	.links a {
		color: var(--muted);
		display: inline-flex;
		align-items: center;
		gap: 5px;
	}
	.links a:hover {
		color: var(--brand-2);
	}
</style>
