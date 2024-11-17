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
		bgBackdrop: 'bg-gradient-to-tr from-primary-600/50 via-secondary-600/50 to-tertiary-600/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;
</script>

<!--Mobile side drawer nav list -->
<div class="relative">
	<Drawer>
		<div class="p-6">
			<!-- TODO: Ul doesn't take click listeners try changing to button, labels, selects, input (prob not)-->
			<button><a href="/" class="p-4 text-4xl" on:click={drawerClose}>Home</a></button>
			<hr />
			<ul class="pt-6">
				{#each navigation.data?.links as item}
					<button class="text-3xl font-semibold tracking-tight grid py-4 pl-4" on:click={drawerClose}>
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
		class="fixed z-10 flex w-screen rounded-lg lg:p-4 items-center justify-center lg:justify-around bg-surface-800 leading-none drop-shadow-2xl"
	>
		<nav class="absolute flex items-center w-full">
		<button class="lg:hidden pl-8" on:click={drawerOpen}>
			<span>
				<svg viewBox="0 0 100 80" class="fill-token h-6 w-6">
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
				</svg>
			</span>
		</button>
		</nav>

		<a href="/" class="relative scale-50 opacity-80 md:scale-75 lg:scale-100">
			<PrismicImage field={settings.data.logo} />
		</a>
		<ul class="relative hidden gap-10 lg:flex lg:items-center">
			{#each navigation.data?.links as item}
				<li class="text-4xl font-semibold tracking-tight text-slate-200 hover:text-primary-200">
					<PrismicLink field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
