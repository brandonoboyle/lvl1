<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<p class="mb-7 font-body last:mb-0">{@render children?.()}</p>
