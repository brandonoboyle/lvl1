<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';
	import squareLogo from '$lib/assets/logo/big-no-neon.png';
	import logo from '$lib/assets/logo/no-neon.png';
	import bg from '$lib/assets/images/bgimage.jpg';
	import {
		initializeStores,
		Drawer,
		getDrawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';
	import PrismicRichText from './PrismicRichText.svelte';
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
		width: 'w-[300px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	interface Props {
		navigation: Content.NavigationDocument;
	}

	let { navigation }: Props = $props();
</script>

<!--Mobile side drawer nav list -->
<div class="relative pb-8 text-primary-50 md:pb-12">
	<Drawer>
		<!--		Logo positioning-->
		<div class="h-full bg-gradient-to-br from-surface-600 to-surface-800 px-6 pt-4">
			<button class="grid w-full justify-center border-none outline-none"
				><a href="/" class="" onclick={drawerClose}>
					<img src={squareLogo} alt="Square Logo" class="" />
				</a></button
			>
			<ul class="pt-2">
				{#each navigation.data?.links as item}
					<button
						class="grid rounded-xl p-2 text-3xl font-semibold tracking-tight hover:bg-surface-700 hover:text-tertiary-200 hover:shadow-2xl"
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
		class="fixed z-10 w-screen items-center justify-items-center bg-surface-800 leading-none drop-shadow-2xl"
	>
		<div class="w-full">
			<img
				src={bg}
				alt="levelonelogo"
				class="absolute inset-0 h-full w-full object-cover object-center opacity-30"
			/>
			<div
				class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 bg-gradient-to-br from-tertiary-700/30 via-surface-600/30 to-secondary-600/30 mix-blend-overlay"
			></div>
			<div class="w-full">
				<nav class="absolute w-full items-center lg:hidden">
					<button aria-label="Open mobile nav" class="ml-1.5 mr-4 mt-5" onclick={drawerOpen}>
						<span>
							<svg
								class="h-12 w-12 text-tertiary-100"
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
									stroke-width="1.5"
									d="M5 7h14M5 12h14M5 17h14"
								/>
							</svg>
						</span>
					</button>
				</nav>
				<div
					class="absolute left-36 top-3 hidden rounded-xl bg-gradient-to-r from-secondary-700 to-tertiary-700 p-4 text-2xl font-semibold tracking-tight text-primary-50 lg:block"
				>
					<PrismicRichText field={navigation.data?.stayplay} />
				</div>
				<div class="grid items-center justify-items-center pt-3 pl-4 lg:grid-cols-1 lg:pl-0">
					<a href="/" class="grid w-fit scale-75 justify-center pb-2 md:scale-90 lg:pb-0">
						<img src={logo} alt="levelonelogo" class="h-[77px] w-[424px]" />
					</a>
				</div>
			</div>
		</div>

		<ul
			class="relative hidden h-full w-full justify-center bg-surface-800 text-center lg:flex lg:items-center"
		>
			{#each navigation.data?.links as item}
				<li
					class="text-nowrap px-6 py-1 text-lg tracking-tight bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-transparent hover:text-secondary-500 hover:shadow-secondary-500"
				>
					<PrismicLink class="" field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
