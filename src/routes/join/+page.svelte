<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import { IconMail, IconCheck } from '@tabler/icons-svelte';

	const looks = [
		'A solid foundation in databases, systems, or machine learning',
		'Strong programming skills and a taste for building real systems',
		'Curiosity about where data management, AI, and quantum meet'
	];
</script>

<Seo title="Join us" description="Open PhD, MSc, and postdoc opportunities at Infinidata Lab, TU Delft." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Open positions</span>
		<h1>Join the lab</h1>
		<p>We're always interested in motivated students and researchers who want to shape the next generation of data systems.</p>
	</div>
</header>

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
			<p class="lede">TU Delft MSc students can do a thesis or research project with us across all three research lines. Reach out with your interests and we'll find a topic together.</p>
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
