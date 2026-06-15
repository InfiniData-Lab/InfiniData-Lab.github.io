<script lang="ts">
	import { site } from '$lib/config';
	let { title, description = site.description }: { title?: string; description?: string } = $props();
	const full = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
</script>

<svelte:head>
	<title>{full}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={full} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
