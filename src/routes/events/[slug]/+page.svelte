<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getEvents, bySlug } from '$lib/content';
	import type { PageData } from './$types';
	import {
		IconArrowLeft,
		IconCalendar,
		IconMapPin,
		IconUsers,
		IconFileText,
		IconPlayerPlay,
		IconExternalLink
	} from '@tabler/icons-svelte';

	let { data }: { data: PageData } = $props();
	const events = getEvents();
	const entry = $derived(bySlug(events, data.slug)!);
	const event = $derived(entry.meta);
	const Body = $derived(entry.component);
	// CMS dates have no time zone; keep the selected calendar day in every locale.
	const fmt = (date: string) =>
		new Date(date).toLocaleDateString('en-GB', {
			day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
		});
</script>

<Seo title={event.title} />

<article class="detail">
	<div class="container narrow">
		<a class="back" href="/events"><IconArrowLeft size={16} /> All events</a>
		{#if event.type}<span class="tag">{event.type}</span>{/if}
		<h1>{event.title}</h1>
		<div class="metadata">
			<p class="date">
				<IconCalendar size={18} />
				<span>
					<time datetime={event.startDate}>{fmt(event.startDate)}</time>
					{#if event.endDate && event.endDate !== event.startDate}
						– <time datetime={event.endDate}>{fmt(event.endDate)}</time>
					{/if}
				</span>
			</p>
			{#if event.location}
				<p><IconMapPin size={18} /><span>{event.location}</span></p>
			{/if}
			{#if event.people?.length}
				<p><IconUsers size={18} /><span>{event.people.join(', ')}</span></p>
			{/if}
		</div>
		{#if event.links?.slides || event.links?.video || event.links?.recording || event.links?.external}
			<div class="links">
				{#if event.links.slides}<a class="btn btn-ghost btn-sm" href={event.links.slides}><IconFileText size={16} /> Slides</a>{/if}
				{#if event.links.video}<a class="btn btn-ghost btn-sm" href={event.links.video}><IconPlayerPlay size={16} /> Video</a>{/if}
				{#if event.links.recording}<a class="btn btn-ghost btn-sm" href={event.links.recording}><IconPlayerPlay size={16} /> Recording</a>{/if}
				{#if event.links.external}<a class="btn btn-ghost btn-sm" href={event.links.external}><IconExternalLink size={16} /> Event website</a>{/if}
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
		max-width: 820px;
	}
	.back {
		display: flex;
		align-items: center;
		gap: 7px;
		width: fit-content;
		color: var(--muted);
		font-size: 14px;
		margin-bottom: 26px;
	}
	.back:hover {
		color: var(--brand-2);
	}
	h1 {
		font-size: clamp(30px, 4.4vw, 46px);
		line-height: 1.15;
		margin: 14px 0 22px;
		overflow-wrap: anywhere;
	}
	.metadata {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 30px;
		color: var(--muted);
	}
	.metadata p {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		margin: 0;
	}
	.metadata :global(svg) {
		flex-shrink: 0;
		margin-top: 3px;
	}
	.date {
		color: var(--brand-2);
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-bottom: 30px;
	}
</style>
