<script lang="ts">
	let { size = 34 }: { size?: number } = $props();
	// Unique gradient id so multiple marks on one page don't clash.
	const id = 'ig-' + Math.random().toString(36).slice(2, 8);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
	<defs>
		<linearGradient {id} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
			<stop stop-color="#8B8CFB" />
			<stop offset="1" stop-color="#34D6F0" />
		</linearGradient>
	</defs>
	<path
		d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828"
		stroke="url(#{id})"
		stroke-width="2.1"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
