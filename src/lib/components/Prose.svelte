<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="prose">{@render children()}</div>

<style>
	.prose {
		color: var(--muted);
		font-size: 17px;
		line-height: 1.75;
		max-width: 70ch;
	}
	.prose :global(p) {
		margin: 0 0 1.1em;
	}
	.prose :global(h2) {
		color: var(--ink);
		font-size: 24px;
		margin: 1.6em 0 0.5em;
	}
	.prose :global(h3) {
		color: var(--ink);
		font-size: 19px;
		margin: 1.4em 0 0.4em;
	}
	.prose :global(a) {
		color: var(--brand-2);
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.prose :global(strong) {
		color: var(--ink);
		font-weight: 500;
	}
	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 1.1em;
		padding-left: 1.3em;
	}
	.prose :global(li) {
		margin-bottom: 0.4em;
	}
	.prose :global(code) {
		font-family: var(--font-mono);
		font-size: 0.9em;
		background: var(--surface-2);
		padding: 2px 6px;
		border-radius: 6px;
	}
	.prose :global(blockquote) {
		border-left: 3px solid var(--brand-2);
		margin: 1.2em 0;
		padding: 4px 0 4px 18px;
		color: var(--muted);
	}
</style>
