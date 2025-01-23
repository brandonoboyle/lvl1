<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';
	import squareLogo from '$lib/assets/square-logo.png';
	import {
		initializeStores,
		Drawer,
		getDrawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}

	function drawerClose(): void {
		drawerStore.close();
	}

	const drawerSettings: DrawerSettings = {
		id: 'sidebar',
		// Native property overrides:
		bgDrawer: '',
		bgBackdrop: 'bg-gradient-to-tr from-secondary-600/50 via-surface-600/50 to-tertiary-600/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	interface Props {
		settings: Content.SettingsDocument;
		navigation: Content.NavigationDocument;
	}

	let { settings, navigation }: Props = $props();
</script>

<!--Mobile side drawer nav list -->
<div class="relative">
	<Drawer>
		<!--		Logo positioning-->
		<div class="h-full px-6 pt-4">
			<button class="w-full border-none outline-none"
				><a href="/" class="" onclick={drawerClose}>
					<img src={squareLogo} alt="Square Logo" class="" />
				</a></button
			>
			<!--			<hr />-->
			<ul class="">
				{#each navigation.data?.links as item}
					<button
						class="grid rounded-xl px-2 py-4 text-4xl font-semibold tracking-tight hover:bg-surface-700 hover:text-tertiary-200 hover:shadow-2xl"
						onclick={drawerClose}
					>
						<PrismicLink field={item.link}>
							<PrismicText field={item.label} />
						</PrismicLink>
					</button>
				{/each}
			</ul>
		</div>
	</Drawer>

	<!--Main page top nav bar-->
	<!--	This is the whole Header-->
	<nav
		class="fixed variant-glass z-20 grid w-screen items-center justify-center rounded-lg p-4 leading-none drop-shadow-2xl lg:justify-around"
	>
		<nav class="absolute w-full items-center lg:hidden">
			<button aria-label="Open mobile nav" class="ml-6" onclick={drawerOpen}>
				<span>
					<svg
						class="h-10 w-10 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-width="2"
							d="M5 7h14M5 12h14M5 17h14"
						/>
					</svg>
				</span>
			</button>
		</nav>

		<a href="/" class="grid scale-50 justify-center md:scale-75">
			<PrismicImage field={settings.data.logo} />
		</a>
		<ul
			class="relative hidden w-screen justify-center rounded-xl text-center lg:flex lg:items-center"
		>
			{#each navigation.data?.links as item}
				<li
					class="text-nowrap rounded-xl px-4 text-2xl font-semibold tracking-tight hover:text-tertiary-200 hover:shadow-2xl lg:text-3xl"
				>
					<!--					TODO Add padding to Link element to make padding clickable-->
					<PrismicLink class="px-2 py-4" field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
