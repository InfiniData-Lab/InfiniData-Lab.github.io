<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import {
		IconMail,
		IconMapPin,
		IconBuilding,
		IconBrandLinkedin,
		IconBrandGithub,
		IconSchool
	} from '@tabler/icons-svelte';
</script>

<Seo title="Contact" description="Get in touch with Infinidata Lab at TU Delft." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Get in touch</span>
		<h1>Contact</h1>
		<p>{site.description}</p>
	</div>
</header>

<div class="container">
	<div class="contact-grid">
		<div class="info">
			<div class="row">
				<span class="ic"><IconMail size={20} /></span>
				<div>
					<h3>Email</h3>
					<a href="mailto:{site.email}">{site.email}</a>
				</div>
			</div>
			<div class="row">
				<span class="ic"><IconMapPin size={20} /></span>
				<div>
					<h3>Where to find us</h3>
					<p>{site.address}</p>
				</div>
			</div>
			<div class="row">
				<span class="ic"><IconBuilding size={20} /></span>
				<div>
					<h3>Affiliation</h3>
					<p>{site.institution} · {site.faculty}</p>
				</div>
			</div>
		</div>

		<aside class="links">
			<h3>Elsewhere</h3>
			<a href={site.socials.linkedin} target="_blank" rel="noreferrer"><IconBrandLinkedin size={18} /> LinkedIn</a>
			<a href={site.socials.github} target="_blank" rel="noreferrer"><IconBrandGithub size={18} /> GitHub</a>
			<a href={site.socials.scholar} target="_blank" rel="noreferrer"><IconSchool size={18} /> Google Scholar</a>
		</aside>
	</div>
</div>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: 32px;
		padding: 44px 0 8px;
		align-items: start;
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.row {
		display: flex;
		gap: 16px;
		align-items: flex-start;
		padding: 20px 0;
		border-bottom: 1px solid var(--line);
	}
	.row .ic {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		display: grid;
		place-items: center;
		flex-shrink: 0;
		color: var(--brand-2);
		background: color-mix(in srgb, var(--brand) 16%, transparent);
		border: 1px solid var(--line-2);
	}
	.row h3 {
		font-size: 15px;
		margin-bottom: 4px;
	}
	.row p,
	.row a {
		color: var(--muted);
	}
	.row a:hover {
		color: var(--brand-2);
	}
	.links {
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: 26px;
	}
	.links h3 {
		font-size: 16px;
		margin-bottom: 16px;
	}
	.links a {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--muted);
		padding: 10px 0;
	}
	.links a:hover {
		color: var(--brand-2);
	}
	@media (max-width: 720px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
