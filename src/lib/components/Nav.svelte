<script lang="ts">
	import { page } from '$app/state';
	import Brand from './Brand.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { navLinks } from '$lib/config';
	import { IconArrowUpRight, IconMenu2, IconX } from '@tabler/icons-svelte';

	let open = $state(false);
	const active = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<nav class="nav">
	<div class="container nav-inner">
		<Brand />
		<div class="nav-links" class:open>
			{#each navLinks as l (l.href)}
				<a href={l.href} class:active={active(l.href)} onclick={() => (open = false)}>{l.label}</a>
			{/each}
		</div>
		<div class="nav-cta">
			<ThemeToggle />
			<a class="btn btn-primary btn-sm join" href="/join">Join us <IconArrowUpRight size={16} /></a>
			<button
				class="burger icon-btn"
				aria-label="Toggle menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				{#if open}<IconX size={20} />{:else}<IconMenu2 size={20} />{/if}
			</button>
		</div>
	</div>
</nav>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: saturate(160%) blur(14px);
		background: color-mix(in srgb, var(--bg) 72%, transparent);
		border-bottom: 1px solid var(--line);
	}
	.nav-inner {
		display: flex;
		align-items: center;
		gap: 20px;
		height: var(--nav-h);
	}
	.nav-links {
		display: flex;
		gap: 2px;
		margin-left: auto;
	}
	.nav-links a {
		font-size: 14.5px;
		color: var(--muted);
		padding: 9px 13px;
		border-radius: 9px;
		font-weight: 450;
		transition:
			color 0.15s,
			background 0.15s;
	}
	.nav-links a:hover,
	.nav-links a.active {
		color: var(--ink);
		background: var(--surface-2);
	}
	.nav-cta {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.burger {
		display: none;
	}
	@media (max-width: 940px) {
		.nav-cta {
			margin-left: auto;
		}
		.burger {
			display: grid;
		}
		.join {
			display: none;
		}
		.nav-links {
			position: absolute;
			top: var(--nav-h);
			left: 0;
			right: 0;
			margin: 0;
			flex-direction: column;
			gap: 4px;
			padding: 14px 28px 22px;
			background: var(--bg-2);
			border-bottom: 1px solid var(--line);
			display: none;
		}
		.nav-links.open {
			display: flex;
		}
		.nav-links a {
			font-size: 16px;
			padding: 11px 14px;
		}
	}
</style>
