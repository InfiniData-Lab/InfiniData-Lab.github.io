<script lang="ts">
	import { onMount } from 'svelte';
	import { IconSun, IconMoon } from '@tabler/icons-svelte';

	let mode = $state<'light' | 'dark'>('dark');

	onMount(() => {
		const saved = localStorage.getItem('theme');
		mode =
			saved === 'light' || saved === 'dark'
				? saved
				: window.matchMedia('(prefers-color-scheme: light)').matches
					? 'light'
					: 'dark';
	});

	function toggle() {
		mode = mode === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = mode;
		try {
			localStorage.setItem('theme', mode);
		} catch (e) {
			/* ignore */
		}
	}
</script>

<button class="icon-btn" onclick={toggle} aria-label="Toggle colour theme" title="Toggle colour theme">
	{#if mode === 'dark'}<IconSun size={18} stroke={2} />{:else}<IconMoon size={18} stroke={2} />{/if}
</button>
