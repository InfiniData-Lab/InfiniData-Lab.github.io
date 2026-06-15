<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import { getPeople } from '$lib/content';
	import type { Role } from '$lib/content/types';

	const people = getPeople();
	const groups: { label: string; roles: Role[] }[] = [
		{ label: 'Principal Investigator', roles: ['PI'] },
		{ label: 'Postdoctoral Researchers', roles: ['Postdoc'] },
		{ label: 'PhD Candidates', roles: ['PhD'] },
		{ label: 'MSc & Visiting', roles: ['MSc', 'Visiting'] },
		{ label: 'Alumni', roles: ['Alumni'] }
	];
	const inGroup = (roles: Role[]) => people.filter((p) => roles.includes(p.meta.role));
</script>

<Seo title="People" description="The researchers of Infinidata Lab at TU Delft." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">The team</span>
		<h1>People</h1>
		<p>A small, ambitious group working where data management, machine learning, and quantum computing meet.</p>
	</div>
</header>

<div class="container" style="padding-bottom: 8px">
	{#each groups as g (g.label)}
		{@const members = inGroup(g.roles)}
		{#if members.length}
			<section class="role-group">
				<div class="role-head">
					<h3>{g.label}</h3>
					<span class="rule"></span>
					<span class="count">{members.length}</span>
				</div>
				<div class="people-grid">
					{#each members as m (m.slug)}
						<PersonCard entry={m} lead={m.meta.role === 'PI'} />
					{/each}
				</div>
			</section>
		{/if}
	{/each}
</div>

<style>
	.role-group {
		margin-bottom: 48px;
	}
	.role-head {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 22px;
	}
	.role-head h3 {
		font-size: 14px;
		font-family: var(--font-mono);
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
		white-space: nowrap;
	}
	.role-head .rule {
		height: 1px;
		flex: 1;
		background: var(--line);
	}
	.role-head .count {
		font-size: 13px;
		color: var(--faint);
	}
	.people-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 18px;
	}
	.people-grid :global(.lead) {
		grid-column: span 2;
	}
	@media (max-width: 940px) {
		.people-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 560px) {
		.people-grid {
			grid-template-columns: 1fr;
		}
		.people-grid :global(.lead) {
			grid-column: span 1;
		}
	}
</style>
