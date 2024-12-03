<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';

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
		// Provide your property overrides:
		bgDrawer: '',
		bgBackdrop: 'bg-gradient-to-tr from-secondary-600/50 via-surface-600/50 to-tertiary-600/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;
</script>

<!--TODO: investigate header padding right for cool float-->
<!--Mobile side drawer nav list -->
<div class="relative">
	<Drawer>
		<div class="p-6">
			<button class="border-none outline-none"
				><a href="/" class="p-4 text-5xl" on:click={drawerClose}>Home</a></button
			>
			<hr />
			<ul class="pt-6">
				{#each navigation.data?.links as item}
					<button
						class="grid py-6 px-2 text-4xl font-semibold tracking-tight rounded-xl hover:shadow-2xl hover:bg-surface-700 hover:text-tertiary-200"
						on:click={drawerClose}
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
	<nav
		class="variant-glass fixed z-10 flex w-screen items-center justify-center rounded-lg leading-none drop-shadow-2xl lg:justify-around lg:p-4"
	>
		<nav class="absolute flex w-full items-center">
			<button class="ml-6 lg:hidden" on:click={drawerOpen}>
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

		<a href="/" class="relative scale-50 md:scale-75 lg:scale-100 py-2 md:py-0">
			<PrismicImage class="" field={settings.data.logo} />
		</a>
		<ul class="relative hidden text-center lg:flex lg:items-center">
			{#each navigation.data?.links as item}
				<li class="rounded-xl text-2xl p-4 lg:text-3xl text-nowrap font-semibold tracking-tight hover:text-tertiary-200 hover:shadow-2xl hover:bg-surface-700">
					<PrismicLink field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
