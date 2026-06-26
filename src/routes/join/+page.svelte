<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getOpenings } from '$lib/content';
	import { site } from '$lib/config';
	import { IconMail, IconCheck, IconArrowUpRight, IconCalendar } from '@tabler/icons-svelte';

	const looks = [
		'A solid foundation in databases, systems, or machine learning',
		'Strong programming skills and a taste for building real systems',
		'Curiosity about where data management, AI, and quantum meet'
	];

	// Closed openings stay in the repo for the record but drop off the public page.
	const openings = getOpenings().filter((o) => o.meta.status !== 'closed');
	const fmt = (d: string) =>
		new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
</script>

<Seo title="Join us" description="Open PhD, MSc, and postdoc opportunities at Infinidata Lab, TU Delft." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Open positions</span>
		<h1>Join the lab</h1>
		<p>We're always interested in motivated students and researchers who want to shape the next generation of data systems.</p>
	</div>
</header>

<section class="container openings">
	<div class="op-head">
		<h2>Current openings</h2>
		{#if openings.length}<span class="op-count">{openings.length}</span>{/if}
	</div>

	{#if openings.length}
		<div class="op-list">
			{#each openings as o (o.slug)}
				{@const Body = o.component}
				<article class="op">
					<div class="op-top">
						<span class="op-type">{o.meta.type ?? 'Opening'}</span>
						{#if o.meta.deadline}
							<span class="op-deadline"><IconCalendar size={14} /> Apply by {fmt(o.meta.deadline)}</span>
						{/if}
					</div>
					<h3>{o.meta.title}</h3>
					{#if o.meta.pillars?.length}
						<div class="tags">
							{#each o.meta.pillars as p}<span class="tag">{p}</span>{/each}
						</div>
					{/if}
					<Prose><Body /></Prose>
					{#if o.meta.links?.apply || o.meta.links?.contact}
						<div class="op-actions">
							{#if o.meta.links?.apply}
								<a class="btn btn-primary btn-sm" href={o.meta.links.apply} target="_blank" rel="noreferrer">Apply / details <IconArrowUpRight size={15} /></a>
							{/if}
							{#if o.meta.links?.contact}
								<a class="btn btn-ghost btn-sm" href="mailto:{o.meta.links.contact}"><IconMail size={15} /> Enquire</a>
							{/if}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{:else}
		<p class="op-empty">
			No specific openings are listed right now — but we always welcome strong open applications.
			If our research fits your interests, email {site.pi} and we'll find a topic together.
		</p>
	{/if}
</section>

<div class="container">
	<div class="join-grid">
		<div>
			<h2>Who we're looking for</h2>
			<ul class="checks">
				{#each looks as item}
					<li><span class="tick"><IconCheck size={14} /></span>{item}</li>
				{/each}
			</ul>

			<h2 class="mt">PhD &amp; postdoc</h2>
			<p class="lede">Funded PhD and postdoc openings are posted on the TU Delft vacancies portal. If nothing is listed that fits, a short, well-argued email is still worth sending.</p>

			<h2 class="mt">MSc thesis &amp; projects</h2>
			<p class="lede">TU Delft MSc students can do a thesis or research project with us across both research directions. Reach out with your interests and we'll find a topic together.</p>
		</div>

		<aside class="apply">
			<h3>How to apply</h3>
			<p>Email {site.pi} with your CV, a transcript, and a few sentences on what excites you about our research.</p>
			<a class="btn btn-primary" href="mailto:{site.email}"><IconMail size={17} /> {site.email}</a>
			<p class="note">Prospective PhD applicants: please mention which research line interests you most.</p>
		</aside>
	</div>
</div>

<style>
	.openings {
		padding: 44px 0 4px;
	}
	.op-head {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 22px;
	}
	.op-head h2 {
		font-size: 24px;
	}
	.op-count {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--faint);
		background: var(--surface-2);
		padding: 2px 10px;
		border-radius: 999px;
	}
	.op-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.op {
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: 24px 26px;
	}
	.op-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		flex-wrap: wrap;
		margin-bottom: 12px;
	}
	.op-type {
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--brand-2);
		background: color-mix(in srgb, var(--brand-2) 13%, transparent);
		border: 1px solid color-mix(in srgb, var(--brand-2) 28%, transparent);
		padding: 4px 11px;
		border-radius: 999px;
	}
	.op-deadline {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--muted);
	}
	.op h3 {
		font-size: 21px;
		margin-bottom: 12px;
	}
	.op .tags {
		margin-bottom: 14px;
	}
	.op-actions {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		margin-top: 18px;
	}
	.op-empty {
		color: var(--muted);
		background: var(--surface);
		border: 1px dashed var(--line-2);
		border-radius: var(--radius-lg);
		padding: 28px;
	}

	.join-grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr;
		gap: 40px;
		padding: 44px 0 8px;
		align-items: start;
	}
	h2 {
		font-size: 24px;
		margin-bottom: 16px;
	}
	.mt {
		margin-top: 36px;
	}
	.lede {
		color: var(--muted);
		max-width: 60ch;
	}
	.checks {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.checks li {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		color: var(--muted);
	}
	.tick {
		width: 22px;
		height: 22px;
		border-radius: 7px;
		display: grid;
		place-items: center;
		flex-shrink: 0;
		margin-top: 2px;
		color: var(--brand-2);
		background: color-mix(in srgb, var(--brand-2) 16%, transparent);
	}
	.apply {
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: 28px;
		position: sticky;
		top: calc(var(--nav-h) + 20px);
	}
	.apply h3 {
		font-size: 18px;
		margin-bottom: 10px;
	}
	.apply p {
		color: var(--muted);
		font-size: 15px;
		margin-bottom: 18px;
	}
	.apply .btn {
		width: 100%;
		justify-content: center;
	}
	.note {
		font-size: 13px !important;
		color: var(--faint) !important;
		margin: 16px 0 0 !important;
	}
	@media (max-width: 820px) {
		.join-grid {
			grid-template-columns: 1fr;
		}
		.apply {
			position: static;
		}
	}
</style>
