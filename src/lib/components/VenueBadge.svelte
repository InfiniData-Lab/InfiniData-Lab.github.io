<script lang="ts">
	import { venueInfo } from '$lib/venues';
	let { venue, year }: { venue: string; year?: number } = $props();
	const v = venueInfo(venue);
	const shownYear = year ?? v.year;
</script>

<span class="venue {v.group}" title={venue}>
	{#if v.publisher}<span class="pub">{v.publisher}</span>{/if}
	<span class="lbl">{v.label}</span>
	{#if shownYear}<span class="yr">{shownYear}</span>{/if}
</span>

<style>
	.venue {
		display: inline-flex;
		align-items: baseline;
		gap: 5px;
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 600;
		line-height: 1;
		padding: 4px 9px;
		border-radius: 6px;
		white-space: nowrap;
		color: var(--c);
		border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
		background: color-mix(in srgb, var(--c) 11%, transparent);
	}
	.pub {
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		opacity: 0.7;
	}
	.yr {
		font-weight: 450;
		opacity: 0.65;
	}

	/* Publisher / community accent colours, tuned for light and dark themes. */
	.acm {
		--c: light-dark(#0a66c2, #5aa9ff);
	}
	.ieee {
		--c: light-dark(#00629b, #56b3e6);
	}
	.vldb {
		--c: light-dark(#b06f0e, #fbbf24);
	}
	.edbt {
		--c: light-dark(#0f766e, #2dd4bf);
	}
	.cidr {
		--c: light-dark(#475569, #9aa7bd);
	}
	.arxiv {
		--c: light-dark(#b31b1b, #f87171);
	}
	.springer {
		--c: light-dark(#6d28d9, #b79bfb);
	}
	.ares {
		--c: light-dark(#9f1239, #fb7185);
	}
	.other {
		--c: var(--brand-2);
	}
</style>
