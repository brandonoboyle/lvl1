<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		sections: { label: string; id: string }[];
	}

	let { sections }: Props = $props();
	let activeId = $state(sections[0]?.id ?? '');
	let navEl: HTMLElement | undefined = $state();
	let scrollContainer: HTMLElement | undefined = $state();
	let headerHeight = $state(0);

	onMount(() => {
		const header = document.querySelector('nav.fixed');
		if (header) {
			const updateHeight = () => {
				headerHeight = header.getBoundingClientRect().height;
			};
			updateHeight();
			window.addEventListener('resize', updateHeight);
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
						scrollActiveIntoView();
					}
				}
			},
			{ rootMargin: '-20% 0px -60% 0px' }
		);

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			activeId = id;
		}
	}

	function scrollActiveIntoView() {
		if (!scrollContainer) return;
		const activeBtn = scrollContainer.querySelector(`[data-section="${activeId}"]`);
		if (activeBtn instanceof HTMLElement) {
			activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
		}
	}
</script>

<nav
	bind:this={navEl}
	class="fixed left-0 z-[9] w-full border-b border-surface-700 bg-surface-800/95 backdrop-blur-sm"
	style="top: {headerHeight}px"
>
	<div
		bind:this={scrollContainer}
		class="scrollbar-hide flex items-center justify-center gap-1 overflow-x-auto px-4 py-3"
	>
		{#each sections as section}
			<button
				data-section={section.id}
				onclick={() => scrollTo(section.id)}
				class="shrink-0 rounded-lg px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition-colors
					{activeId === section.id
					? 'bg-gradient-to-br from-primary-500 to-tertiary-400 text-surface-900'
					: 'text-tertiary-50 hover:bg-surface-700 hover:text-primary-400'}"
			>
				{section.label}
			</button>
		{/each}
	</div>
</nav>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
