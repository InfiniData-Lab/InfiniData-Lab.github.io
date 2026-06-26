<script lang="ts">
	import Brand from './Brand.svelte';
	import { site } from '$lib/config';
	import { IconBrandLinkedin, IconBrandGithub, IconSchool } from '@tabler/icons-svelte';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div>
				<Brand size={30} />
				<p class="blurb">Data-intensive systems research at TU Delft, {site.faculty}.</p>
			</div>
			<div>
				<h5>Research</h5>
				<a href="/research">AI in Data Lakes</a>
				<a href="/research">Quantum Data Management</a>
			</div>
			<div>
				<h5>Explore</h5>
				<a href="/projects">Projects</a>
				<a href="/publications">Publications</a>
				<a href="/people">People</a>
				<a href="/blog">Blog</a>
			</div>
			<div>
				<h5>Connect</h5>
				<a href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
				<a href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a>
				<a href={site.socials.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
				<a href="mailto:{site.email}">{site.email}</a>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© {year} {site.name} · {site.institution}</span>
			<span class="socials">
				<a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
					><IconBrandLinkedin size={18} /></a
				>
				<a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"
					><IconBrandGithub size={18} /></a
				>
				<a href={site.socials.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar"
					><IconSchool size={18} /></a
				>
			</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--line);
		padding: 56px 0 40px;
		margin-top: 40px;
	}
	.footer-grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr 1fr;
		gap: 32px;
		margin-bottom: 40px;
	}
	.blurb {
		max-width: 34ch;
		color: var(--muted);
		font-size: 14px;
		margin-top: 14px;
	}
	h5 {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--faint);
		margin: 0 0 16px;
		font-weight: 500;
		font-family: var(--font-mono);
	}
	.footer-grid a {
		display: block;
		color: var(--muted);
		font-size: 14px;
		margin-bottom: 9px;
	}
	.footer-grid a:hover {
		color: var(--brand-2);
	}
	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 24px;
		border-top: 1px solid var(--line);
		color: var(--faint);
		font-size: 13px;
		flex-wrap: wrap;
		gap: 12px;
	}
	.socials {
		display: flex;
		gap: 16px;
	}
	.socials a:hover {
		color: var(--brand-2);
	}
	@media (max-width: 760px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 460px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
