<script lang="ts">
	import type { Entry } from '$lib/content';
	import type { Person } from '$lib/content/types';
	import {
		IconWorld,
		IconSchool,
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail
	} from '@tabler/icons-svelte';

	let { entry, lead = false }: { entry: Entry<Person>; lead?: boolean } = $props();
	const p = entry.meta;
	const initials = p.name
		.split(' ')
		.map((w) => w[0])
		.slice(0, 2)
		.join('')
		.toUpperCase();
</script>

<article class="person" class:lead class:alum={p.role === 'Alumni'}>
	<div class="avatar" aria-hidden="true">
		{#if p.photo}<img src={p.photo} alt="" />{:else}{initials}{/if}
	</div>
	<div class="body">
		<h4><a href="/people/{entry.slug}">{p.name}</a></h4>
		<p class="role">{p.title ?? p.role}</p>
		{#if p.interests?.length}<p class="ints">{p.interests.join(' · ')}</p>{/if}
		{#if p.links}
			<div class="socials">
				{#if p.links.website}<a href={p.links.website} aria-label="Website"><IconWorld size={17} /></a>{/if}
				{#if p.links.scholar}<a href={p.links.scholar} aria-label="Scholar"><IconSchool size={17} /></a>{/if}
				{#if p.links.github}<a href={p.links.github} aria-label="GitHub"><IconBrandGithub size={17} /></a>{/if}
				{#if p.links.linkedin}<a href={p.links.linkedin} aria-label="LinkedIn"><IconBrandLinkedin size={17} /></a>{/if}
				{#if p.links.email}<a href="mailto:{p.links.email}" aria-label="Email"><IconMail size={17} /></a>{/if}
			</div>
		{/if}
	</div>
</article>

<style>
	.person {
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: 22px;
		text-align: center;
		transition:
			transform 0.18s,
			border-color 0.18s,
			box-shadow 0.25s;
	}
	.person:hover {
		transform: translateY(-4px);
		border-color: var(--line-2);
		box-shadow: var(--shadow);
	}
	.avatar {
		width: 82px;
		height: 82px;
		border-radius: 50%;
		margin: 0 auto 16px;
		display: grid;
		place-items: center;
		overflow: hidden;
		font-family: var(--font-head);
		font-weight: 600;
		font-size: 28px;
		color: #0a0d1f;
		background-image: var(--grad);
		box-shadow: 0 0 0 1px var(--line-2);
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	h4 {
		font-size: 17px;
		margin-bottom: 3px;
	}
	h4 a:hover {
		color: var(--brand-2);
	}
	.role {
		font-size: 13px;
		color: var(--muted);
		margin-bottom: 12px;
	}
	.ints {
		font-size: 12.5px;
		color: var(--faint);
	}
	.socials {
		display: flex;
		justify-content: center;
		gap: 14px;
		margin-top: 14px;
		color: var(--faint);
	}
	.socials a:hover {
		color: var(--brand-2);
	}
	.alum {
		opacity: 0.9;
	}
	.alum .avatar {
		filter: saturate(0.55);
	}

	.person.lead {
		display: flex;
		gap: 24px;
		align-items: center;
		text-align: left;
	}
	.person.lead .avatar {
		margin: 0;
		width: 104px;
		height: 104px;
		font-size: 34px;
		flex-shrink: 0;
	}
	.person.lead .socials {
		justify-content: flex-start;
	}
	.person.lead h4 {
		font-size: 22px;
	}
	.person.lead .role {
		font-size: 15px;
	}
	.person.lead .ints {
		font-size: 14px;
	}
	@media (max-width: 560px) {
		.person.lead {
			flex-direction: column;
			text-align: center;
		}
		.person.lead .socials {
			justify-content: center;
		}
	}
</style>
