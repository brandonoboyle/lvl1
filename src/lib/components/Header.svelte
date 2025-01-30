<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';
	import squareLogo from '$lib/assets/logo/square-logo.png';
	import logo from '$lib/assets/logo/logo-text.png';
	import smallLogo from '$lib/assets/logo/small-logo.png';
	import {
		initializeStores,
		Drawer,
		getDrawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';

	import Facebook from '$lib/assets/icons/Facebook.svelte';
	import Instagram from '$lib/assets/icons/Instagram.svelte';
	import Twitter from '$lib/assets/icons/Twitter.svelte';
	import Youtube from '$lib/assets/icons/Youtube.svelte';

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
		navigation: Content.NavigationDocument;
	}

	let { navigation }: Props = $props();
</script>

<!--Mobile side drawer nav list -->
<div class="relative text-slate-100">
	<Drawer>
		<!--		Logo positioning-->
		<div class="h-full px-6 pt-4">
			<button class="w-full grid justify-center border-none outline-none"
				><a href="/" class="" onclick={drawerClose}>
					<img src={squareLogo} alt="Square Logo" class="" />
				</a></button
			>
			<!--			<hr />-->
			<ul class="">
				{#each navigation.data?.links as item}
					<button
						class="grid rounded-xl px-2 py-4 text-3xl font-semibold tracking-tight hover:bg-surface-700 hover:text-tertiary-200 hover:shadow-2xl"
						onclick={drawerClose}
					>
						<PrismicLink field={item.link}>
							<PrismicText field={item.label} />
						</PrismicLink>
					</button>
				{/each}
			</ul>
			<div class="grid grid-flow-col justify-items-center pt-10">
				<a href="https://twitter.com/LevelOneGamePub" target="_blank">
					<Twitter />
				</a>
				<a href="https://www.facebook.com/leveloneottawa/" target="_blank">
					<Facebook />
				</a>
				<a href="https://www.instagram.com/LevelOneGamePub/" target="_blank">
					<Instagram />
				</a>
				<a href="https://www.youtube.com/channel/UCxUrR521vvkLbU_mIE9xLnQ" target="_blank">
					<Youtube />
				</a>
			</div>
		</div>
	</Drawer>

	<!--Main page top nav bar-->
	<!--	This is the whole Header-->
	<nav
		class="variant-glass fixed z-10 w-screen items-center justify-items-center leading-none drop-shadow-2xl"
	>
		<div class="w-full">
			<nav class="absolute w-full items-center lg:hidden">
				<button aria-label="Open mobile nav" class="ml-2 mt-5" onclick={drawerOpen}>
					<span>
						<svg
							class="h-12 w-12 text-gray-800 dark:text-slate-100"
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
			<div class="grid items-center justify-items-center pt-3 lg:grid-cols-1">
				<a href="/" class="grid w-fit scale-75 justify-center pb-2 md:scale-90 lg:pb-0">
					<img src={logo} alt="levelonelogo" class="" />
				</a>
				<div class="absolute right-0 hidden h-1/4 w-1/6 grid-flow-col pr-6 lg:grid">
					<a href="https://twitter.com/LevelOneGamePub" target="_blank">
						<Twitter />
					</a>
					<a href="https://www.facebook.com/leveloneottawa/" target="_blank">
						<Facebook />
					</a>
					<a href="https://www.instagram.com/LevelOneGamePub/" target="_blank">
						<Instagram />
					</a>
					<a href="https://www.youtube.com/channel/UCxUrR521vvkLbU_mIE9xLnQ" target="_blank">
						<Youtube />
					</a>
				</div>
			</div>
		</div>

		<ul
			class="relative hidden h-full w-full justify-center bg-surface-800 py-1 text-center lg:flex lg:items-center"
		>
			{#each navigation.data?.links as item}
				<li
					class="text-nowrap px-6 text-lg font-semibold tracking-tight hover:text-tertiary-200 hover:shadow-2xl"
				>
					<PrismicLink class="" field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</div>
