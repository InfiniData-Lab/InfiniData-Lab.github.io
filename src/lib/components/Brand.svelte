<script lang="ts">
	import BrandMark from './BrandMark.svelte';
	let { size = 34, href = '/' }: { size?: number; href?: string } = $props();
</script>

<a class="brand" {href} aria-label="Infinidata Lab — home">
	<BrandMark {size} />
	<span class="word">Infinidata<b>&nbsp;Lab</b></span>
</a>

<style>
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 11px;
	}
	.word {
		font-family: var(--font-head);
		font-weight: 500;
		font-size: 18px;
		letter-spacing: -0.01em;
		color: var(--ink);
	}
	.word b {
		font-weight: 600;
	}
</style>
