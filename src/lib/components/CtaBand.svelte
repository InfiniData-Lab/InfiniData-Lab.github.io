<script lang="ts">
	import { IconArrowRight } from '@tabler/icons-svelte';
	let {
		eyebrow = 'Join us',
		title,
		body,
		cta,
		href
	}: { eyebrow?: string; title: string; body: string; cta: string; href: string } = $props();
</script>

<div class="cta-band">
	<span class="eyebrow">{eyebrow}</span>
	<h2>{title}</h2>
	<p>{body}</p>
	<a class="btn btn-primary" {href}>{cta} <IconArrowRight size={18} /></a>
</div>
