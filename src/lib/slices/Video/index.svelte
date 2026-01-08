<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.VideoSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative h-[calc(100vh-6rem)] w-full overflow-hidden md:h-[calc(100vh-8rem)]"
>
	{#if isFilled.linkToMedia(slice.primary.video)}
		<video
			class="absolute inset-0 h-full w-full object-cover"
			src={slice.primary.video.url}
			autoplay
			muted
			loop
			playsinline
		>
			<track kind="captions" />
		</video>
	{/if}
</section>