<script lang="ts">
	import type { Content } from "@prismicio/client";
	import { PrismicLink, PrismicText, PrismicImage } from "@prismicio/svelte";

	// import Bounded from "./Bounded.svelte";

	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;
</script>

<!-- <Bounded tag="header" yPadding="base" class="relative z-10"> -->
<div class="relative">
	<!-- <a href="/" class="text-xl font-semibold tracking-tight"> -->
	<!-- 	<PrismicText field={settings.data.siteTitle} /> -->
	<!-- </a> -->
	<nav
		class="fixed w-full z-10 lg:pr-14 p-2 flex flex-wrap items-center justify-center lg:justify-between leading-none bg-surface-800 drop-shadow-2xl"
	>
		<a href="/" class="scale-75 opacity-80 items-center">
			<PrismicImage field={settings.data.logo} />
		</a>
		<ul class="hidden lg:flex lg:flex-wrap lg:gap-10">
			{#each navigation.data?.links as item}
				<li
					class="font-semibold tracking-tight text-3xl text-slate-200 hover:text-tertiary-400"
				>
					<PrismicLink field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
<!-- </Bounded> -->
