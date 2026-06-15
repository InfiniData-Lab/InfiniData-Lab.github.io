<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import PublicationItem from '$lib/components/PublicationItem.svelte';
	import { getPeople, getPublications, bySlug } from '$lib/content';
	import {
		IconArrowLeft,
		IconWorld,
		IconSchool,
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail
	} from '@tabler/icons-svelte';

	let { data } = $props();
	const entry = bySlug(getPeople(), data.slug)!;
	const p = entry.meta;
	const Body = entry.component;
	const initials = p.name
		.split(' ')
		.map((w) => w[0])
		.slice(0, 2)
		.join('')
		.toUpperCase();
	const authored = getPublications().filter((pub) => pub.meta.authors.includes(p.name));
</script>

<Seo title={p.name} description={p.title ?? p.role} />

<article class="detail">
	<div class="container narrow">
		<a class="back" href="/people"><IconArrowLeft size={16} /> All people</a>

		<div class="head">
			<div class="avatar" aria-hidden="true">
				{#if p.photo}<img src={p.photo} alt="" />{:else}{initials}{/if}
			</div>
			<div>
				<h1>{p.name}</h1>
				<p class="role">{p.title ?? p.role}</p>
				{#if p.links}
					<div class="socials">
						{#if p.links.website}<a href={p.links.website} aria-label="Website"><IconWorld size={19} /></a>{/if}
						{#if p.links.scholar}<a href={p.links.scholar} aria-label="Scholar"><IconSchool size={19} /></a>{/if}
						{#if p.links.github}<a href={p.links.github} aria-label="GitHub"><IconBrandGithub size={19} /></a>{/if}
						{#if p.links.linkedin}<a href={p.links.linkedin} aria-label="LinkedIn"><IconBrandLinkedin size={19} /></a>{/if}
						{#if p.links.email}<a href="mailto:{p.links.email}" aria-label="Email"><IconMail size={19} /></a>{/if}
					</div>
				{/if}
			</div>
		</div>

		{#if p.interests?.length}
			<div class="tags">
				{#each p.interests as i}<span class="tag">{i}</span>{/each}
			</div>
		{/if}

		<Prose><Body /></Prose>

		{#if authored.length}
			<h2 class="rel">Publications</h2>
			<div class="pub-list">
				{#each authored as pub (pub.slug)}<PublicationItem entry={pub} />{/each}
			</div>
		{/if}
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
		display: inline-flex;
		align-items: center;
		gap: 7px;
		color: var(--muted);
		font-size: 14px;
		margin-bottom: 26px;
	}
	.back:hover {
		color: var(--brand-2);
	}
	.head {
		display: flex;
		gap: 24px;
		align-items: center;
		margin-bottom: 22px;
	}
	.avatar {
		width: 104px;
		height: 104px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		overflow: hidden;
		flex-shrink: 0;
		font-family: var(--font-head);
		font-weight: 600;
		font-size: 36px;
		color: #0a0d1f;
		background-image: var(--grad);
		box-shadow: 0 0 0 1px var(--line-2);
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	h1 {
		font-size: clamp(28px, 4vw, 42px);
		margin-bottom: 6px;
	}
	.role {
		color: var(--muted);
		margin-bottom: 14px;
	}
	.socials {
		display: flex;
		gap: 16px;
		color: var(--faint);
	}
	.socials a:hover {
		color: var(--brand-2);
	}
	.tags {
		margin-bottom: 30px;
	}
	.rel {
		font-size: 20px;
		margin: 40px 0 16px;
		padding-top: 28px;
		border-top: 1px solid var(--line);
	}
	.pub-list {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	@media (max-width: 560px) {
		.head {
			flex-direction: column;
			text-align: center;
			align-items: center;
		}
		.socials {
			justify-content: center;
		}
	}
</style>
