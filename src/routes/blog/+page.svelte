<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import EmptyState from '$lib/components/EmptyState.svelte';
	import { getBlogPosts } from '$lib/content';
	import { IconNotebook } from '@tabler/icons-svelte';

	const posts = getBlogPosts();
	const fmt = (d: string) =>
		new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<Seo title="Blog" description="Notes, announcements, and write-ups from Infinidata Lab." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Notes &amp; announcements</span>
		<h1>Blog</h1>
		<p>Short write-ups on our research, paper announcements, and the occasional behind-the-scenes.</p>
	</div>
</header>

<div class="container" style="padding-bottom: 8px">
	{#if posts.length === 0}
		<EmptyState icon={IconNotebook} title="No posts yet" body="We're just getting started — check back soon for write-ups and announcements." />
	{:else}
		<div class="post-list">
			{#each posts as post (post.slug)}
				<a class="post" href="/blog/{post.slug}">
					<span class="date">{fmt(post.meta.date)}</span>
					<h2>{post.meta.title}</h2>
					{#if post.meta.excerpt}<p>{post.meta.excerpt}</p>{/if}
					{#if post.meta.tags?.length}
						<div class="tags">
							{#each post.meta.tags as t}<span class="tag">{t}</span>{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.post-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 800px;
	}
	.post {
		display: block;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: 26px 28px;
		transition:
			transform 0.15s,
			border-color 0.15s,
			box-shadow 0.25s;
	}
	.post:hover {
		transform: translateY(-3px);
		border-color: var(--line-2);
		box-shadow: var(--shadow);
	}
	.date {
		font-family: var(--font-mono);
		font-size: 12.5px;
		letter-spacing: 0.04em;
		color: var(--brand-2);
	}
	.post h2 {
		font-size: 23px;
		margin: 8px 0 10px;
	}
	.post p {
		color: var(--muted);
		margin-bottom: 16px;
	}
</style>
