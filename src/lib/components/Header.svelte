<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';



	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;
</script>

<!-- <Bounded tag="header" yPadding="base" class="relative z-10"> -->
<div class="relative">
	<nav
		class="fixed z-10 flex w-full items-center bg-surface-800 p-2 leading-none drop-shadow-2xl lg:justify-between lg:pr-14"
	>
		<button class="lg:hidden btn btn-sm justify-self-start pl-2" on:click={drawerOpen}>
		<span>
			<svg viewBox="0 0 100 80" class="fill-token h-6 w-6">
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
		</span>
		</button>
		<a href="/" class="scale-75 items-center opacity-80">
			<PrismicImage field={settings.data.logo} />
		</a>
		<ul class="hidden lg:flex lg:flex-wrap lg:gap-10">
			{#each navigation.data?.links as item}
				<li class="text-3xl font-semibold tracking-tight text-slate-200 hover:text-tertiary-400">
					<PrismicLink field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
<!-- </Bounded> -->
