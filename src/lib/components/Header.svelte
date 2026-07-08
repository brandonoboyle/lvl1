<script lang="ts">
	import logo from '$lib/assets/logo/no-neon.png';

	// Figma nav. Swap to CMS-driven links later if needed.
	const links = [
		{ label: 'Menu', href: '/food' },
		{ label: 'Games', href: '/board_games' },
		{ label: 'Events', href: '/#events' },
		{ label: 'Corporate Parties', href: '/#events' },
		{ label: 'Gift Cards', href: '#' }
	];

	let open = $state(false);
</script>

<!-- Keeps `nav.fixed` so MenuNav can measure header height -->
<nav class="fixed left-0 top-0 z-50 w-full py-1 bg-ink">
	<div class="flex h-16 items-center justify-between px-6 lg:px-10">
		<a href="/" class="shrink-0" onclick={() => (open = false)}>
			<img src={logo} alt="Level One Game Pub" class="h-10 w-auto lg:h-12" />
		</a>

		<ul class="hidden items-center gap-10 font-heading text-xl font-bold text-chalk lg:flex xl:gap-14">
			{#each links as item}
				<li>
					<a href={item.href} class="transition-colors hover:text-red-bright">{item.label}</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3">
			<a
				href="#"
				class="hidden rounded bg-gradient-to-r from-red to-red-bright px-3 py-1.5 font-heading text-sm font-medium text-ivory shadow-[4px_4px_0px_#191412] sm:inline-block"
			>
				$9 Stay &amp; Play
			</a>
			<button
				class="text-chalk lg:hidden"
				aria-label="Toggle menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<svg
					class="h-7 w-7"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				>
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path d="M5 7h14M5 12h14M5 17h14" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<ul
			class="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 pb-4 pt-2 font-heading text-lg font-bold text-chalk lg:hidden"
		>
			{#each links as item}
				<li>
					<a href={item.href} class="block py-2 hover:text-red-bright" onclick={() => (open = false)}>
						{item.label}
					</a>
				</li>
			{/each}
			<li>
				<a
					href="#"
					class="mt-2 inline-block rounded bg-gradient-to-r from-red to-red-bright px-3 py-1.5 text-sm font-medium text-ivory"
					onclick={() => (open = false)}
				>
					$9 Stay &amp; Play
				</a>
			</li>
		</ul>
	{/if}
</nav>
