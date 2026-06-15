<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjects } from '$lib/content';
	const projects = getProjects();
</script>

<Seo title="Projects" description="Research projects and systems built at Infinidata Lab." />

<header class="page-head">
	<div class="container">
		<span class="eyebrow">Systems &amp; projects</span>
		<h1>Projects</h1>
		<p>The systems we build to test our ideas — each links out to its code, paper, and data.</p>
	</div>
</header>

<div class="container" style="padding-bottom: 8px">
	<div class="grid grid-2">
		{#each projects as project (project.slug)}
			<ProjectCard entry={project} />
		{/each}
	</div>
</div>
