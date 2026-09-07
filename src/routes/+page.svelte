<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { getProjects, getPublications, getNews, featured } from '$lib/content';
	import { conferencePublications } from '$lib/content/publication-stats';
	import homepage from '../content/settings/homepage.json';
	import { site } from '$lib/config';
	import { IconArrowRight, IconStack2, IconAtom2 } from '@tabler/icons-svelte';

	const projects = featured(getProjects()).slice(0, 4);
	const news = featured(getNews()).slice(0, 3);
	const publicationCount = conferencePublications(getPublications(), homepage.publicationStartYear).length;
	const formatDate = (date: string) => new Date(date).toLocaleDateString('en-GB', {
		day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
	});
</script>

<Seo />

<header class="hero">
	<div class="container">
		<span class="hero-badge"><span class="dot"></span> TU Delft · Web Information Systems</span>
		<h1>Data management for the <span class="grad-text">age of AI and Quantum Computing</span></h1>
		<p class="hero-sub">{site.description}</p>
		<div class="hero-actions">
			<a class="btn btn-primary" href="/research">Explore our research <IconArrowRight size={18} /></a>
			<a class="btn btn-ghost" href="/people">Meet the team</a>
		</div>
		<div class="hero-meta">
			<span>Led by <b>Dr. Rihan Hai</b>, Assistant Professor</span>
			<span title={homepage.publicationStatNote}><b>{publicationCount}</b> {homepage.publicationStatLabel} since {homepage.publicationStartYear}</span>
			<span><b>NWO VENI</b> laureate</span>
		</div>
	</div>
</header>

<section class="section">
	<div class="container">
		<div class="section-head">
			<div>
				<span class="eyebrow">What we work on</span>
				<h2>Data systems, in two directions</h2>
				<p>Everything we build is a data system. We push in two directions — making data systems work for AI, and inventing data systems for quantum computing.</p>
			</div>
		</div>
		<div class="grid grid-2">
			<div class="card">
				<div class="ic"><IconStack2 size={24} /></div>
				<p class="tagline">Data Systems for AI</p>
				<h3><a href="/research#ai-in-data-lakes">AI in Data Lakes</a></h3>
				<p>We bring machine learning to the data lake — integrating scattered data into training sets, discovering and serving models, and generating synthetic data across silos.</p>
			</div>
			<div class="card">
				<div class="ic"><IconAtom2 size={24} /></div>
				<p class="tagline">Data Systems for Quantum Computing</p>
				<h3><a href="/research#quantum-data-management">Quantum Data Management</a></h3>
				<p>We reinvent data management for quantum computers — simulating circuits inside a database, compiling quantum queries, and managing data in the NISQ era.</p>
			</div>
		</div>
	</div>
</section>

<section class="section pt0">
	<div class="container">
		<div class="section-head">
			<div>
				<span class="eyebrow">Selected work</span>
				<h2>Featured projects</h2>
			</div>
			<a class="link-arrow" href="/projects">All projects <IconArrowRight size={16} /></a>
		</div>
		<div class="grid grid-2">
			{#each projects as project (project.slug)}
				<ProjectCard entry={project} />
			{/each}
		</div>
	</div>
</section>

{#if news.length}
<section class="section pt0" aria-labelledby="news-heading">
	<div class="container">
		<div class="section-head">
			<div>
				<span class="eyebrow">{homepage.newsEyebrow}</span>
				<h2 id="news-heading">{homepage.newsHeading}</h2>
			</div>
		</div>
		<div class="grid grid-3">
			{#each news as item (item.slug)}
				<article class="card news-card">
					<div class="news-meta">
						<span class="tag">{item.meta.category}</span>
						<time datetime={item.meta.date}>{formatDate(item.meta.date)}</time>
					</div>
					<h3>
						{#if item.meta.link}<a href={item.meta.link}>{item.meta.title}</a>{:else}{item.meta.title}{/if}
					</h3>
					<p>{item.meta.summary}</p>
					{#if item.meta.link}
						<a class="link-arrow news-link" href={item.meta.link} aria-label="Read more: {item.meta.title}">Read more <IconArrowRight size={16} /></a>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
{/if}

<section class="section pt0">
	<div class="container">
		<CtaBand
			title="Curious about data systems, ML, or quantum?"
			body="We're always looking for sharp PhD and MSc students. Thesis topics and open positions are posted year-round."
			cta="See open positions"
			href="/join"
		/>
	</div>
</section>

<style>
	.pt0 {
		padding-top: 0;
	}
	.news-card {
		display: flex;
		flex-direction: column;
	}
	.news-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px 12px;
		margin-bottom: 18px;
		font-size: 13px;
		color: var(--muted);
	}
	.news-card h3 a:hover {
		color: var(--brand-2);
	}
	.news-link {
		margin-top: auto;
		padding-top: 20px;
	}

	.hero {
		position: relative;
		overflow: hidden;
		padding: 96px 0 84px;
	}
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background:
			radial-gradient(680px 360px at 18% -8%, color-mix(in srgb, var(--brand) 34%, transparent), transparent 70%),
			radial-gradient(620px 420px at 92% 8%, color-mix(in srgb, var(--brand-2) 26%, transparent), transparent 68%);
	}
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		opacity: 0.5;
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 56px 56px;
		mask-image: radial-gradient(700px 380px at 50% 0%, #000 30%, transparent 75%);
		-webkit-mask-image: radial-gradient(700px 380px at 50% 0%, #000 30%, transparent 75%);
	}
	.hero :global(.container) {
		position: relative;
		z-index: 1;
	}
	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 6px 14px 6px 12px;
		border-radius: 999px;
		border: 1px solid var(--line-2);
		background: color-mix(in srgb, var(--surface) 60%, transparent);
		font-size: 13px;
		color: var(--muted);
		margin-bottom: 26px;
	}
	.hero-badge .dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--brand-2);
		box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand-2) 22%, transparent);
	}
	.hero h1 {
		font-size: clamp(40px, 6.2vw, 70px);
		max-width: 16ch;
		margin-bottom: 22px;
	}
	.hero-sub {
		font-size: clamp(17px, 2vw, 20px);
		color: var(--muted);
		max-width: 60ch;
		margin-bottom: 34px;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 13px;
		align-items: center;
	}
	.hero-meta {
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		gap: 26px 40px;
		align-items: center;
		color: var(--faint);
		font-size: 14px;
	}
	.hero-meta b {
		color: var(--ink);
		font-weight: 500;
	}
</style>
