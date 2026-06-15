<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getBlogPosts, bySlug } from '$lib/content';
	import { IconArrowLeft } from '@tabler/icons-svelte';

	let { data } = $props();
	const entry = bySlug(getBlogPosts(), data.slug)!;
	const p = entry.meta;
	const Body = entry.component;
	const fmt = (d: string) =>
		new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<Seo title={p.title} description={p.excerpt} />

<article class="detail">
	<div class="container narrow">
		<a class="back" href="/blog"><IconArrowLeft size={16} /> All posts</a>
		<span class="date">{fmt(p.date)}{#if p.authors?.length} · {p.authors.join(', ')}{/if}</span>
		<h1>{p.title}</h1>
		{#if p.tags?.length}
			<div class="tags">
				{#each p.tags as t}<span class="tag">{t}</span>{/each}
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
		max-width: 760px;
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
	.date {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--brand-2);
	}
	h1 {
		font-size: clamp(30px, 4.4vw, 46px);
		line-height: 1.15;
		margin: 10px 0 16px;
	}
	.tags {
		margin-bottom: 30px;
	}
</style>
