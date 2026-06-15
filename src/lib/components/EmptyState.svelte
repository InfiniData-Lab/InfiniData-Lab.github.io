<script lang="ts">
	import type { Component } from 'svelte';
	let { icon, title, body }: { icon?: Component; title: string; body: string } = $props();
	const Icon = icon;
</script>

<div class="empty">
	{#if Icon}<div class="ic"><Icon size={26} /></div>{/if}
	<h3>{title}</h3>
	<p>{body}</p>
</div>

<style>
	.empty {
		text-align: center;
		padding: 64px 24px;
		border: 1px dashed var(--line-2);
		border-radius: var(--radius-lg);
		background: var(--surface);
	}
	.ic {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		display: grid;
		place-items: center;
		margin: 0 auto 16px;
		color: var(--brand-2);
		background: color-mix(in srgb, var(--brand) 16%, transparent);
		border: 1px solid var(--line-2);
	}
	h3 {
		font-size: 19px;
		margin-bottom: 8px;
	}
	p {
		color: var(--muted);
		max-width: 42ch;
		margin: 0 auto;
	}
</style>
