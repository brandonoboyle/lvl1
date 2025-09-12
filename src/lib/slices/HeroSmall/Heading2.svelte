<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Heading tag="h2" size="sm" class="mb-5 mt-8 first:mt-0 last:mb-0 font-heading">
	{@render children?.()}
</Heading>
