<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import EmptyState from '$lib/components/EmptyState.svelte';
	import { getEvents } from '$lib/content';
	import { site } from '$lib/config';
	import { IconCalendarEvent, IconCalendar, IconMapPin } from '@tabler/icons-svelte';

	const now = Date.now();
	const events = getEvents();
	const upcoming = events.filter((e) => +new Date(e.meta.startDate) >= now);
	const past = events.filter((e) => +new Date(e.meta.startDate) < now);
	const fmt = (d: string) =>
		new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
</script>

<Seo title="Events" description="Talks, keynotes, and workshops from Infinidata Lab." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Talks &amp; keynotes</span>
		<h1>Events</h1>
		<p>Keynotes, talks, panels, and the workshops we help organise.</p>
	</div>
</header>

<div class="container" style="padding-bottom: 8px">
	{#if events.length === 0}
		<EmptyState
			icon={IconCalendarEvent}
			title="No events scheduled right now"
			body="Nothing on the calendar at the moment. Follow us on LinkedIn for talks and workshop announcements — and check back soon."
		/>
		<p class="follow">
			<a class="link-arrow" href={site.socials.linkedin} target="_blank" rel="noreferrer">Follow on LinkedIn →</a>
		</p>
	{:else}
		{#if upcoming.length}
			<h2 class="grp">Upcoming</h2>
			<div class="ev-list">
				{#each upcoming as e (e.slug)}
					<a class="ev" href="/events/{e.slug}">
						<span class="when"><IconCalendar size={15} /> {fmt(e.meta.startDate)}</span>
						<span class="title">{e.meta.title}</span>
						{#if e.meta.location}<span class="loc"><IconMapPin size={15} /> {e.meta.location}</span>{/if}
						{#if e.meta.type}<span class="tag">{e.meta.type}</span>{/if}
					</a>
				{/each}
			</div>
		{/if}
		{#if past.length}
			<h2 class="grp">Past</h2>
			<div class="ev-list">
				{#each past as e (e.slug)}
					<a class="ev" href="/events/{e.slug}">
						<span class="when"><IconCalendar size={15} /> {fmt(e.meta.startDate)}</span>
						<span class="title">{e.meta.title}</span>
						{#if e.meta.location}<span class="loc"><IconMapPin size={15} /> {e.meta.location}</span>{/if}
						{#if e.meta.type}<span class="tag">{e.meta.type}</span>{/if}
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.follow {
		text-align: center;
		margin-top: 22px;
	}
	.grp {
		font-size: 22px;
		margin: 36px 0 18px;
	}
	.ev-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.ev {
		display: flex;
		align-items: center;
		gap: 18px;
		flex-wrap: wrap;
		padding: 18px 22px;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		transition: border-color 0.15s;
	}
	.ev:hover {
		border-color: var(--brand);
	}
	.when {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		color: var(--brand-2);
		font-family: var(--font-mono);
		font-size: 13px;
		min-width: 150px;
	}
	.title {
		font-weight: 500;
		flex: 1;
	}
	.loc {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--faint);
		font-size: 13px;
	}
</style>
