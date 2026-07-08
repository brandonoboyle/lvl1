<script lang="ts">
	const announcements = [
		{
			img: '/redesign/ann-trivia.jpg',
			title: 'Geek Trivia',
			body: 'Cake, games, and zero cleanup. We handle the party — you handle the fun.'
		},
		{
			img: '/redesign/ann-tko.jpg',
			title: 'TKO Tuesdays',
			body: 'Rally your crew for an epic session. 500+ games, great food, and drinks on tap.'
		},
		{
			img: '/redesign/ann-clock.jpg',
			title: 'Blood on the Clocktower',
			body: 'Elevate your next team outing with exclusive venue packages built for bonding, clients, and celebrations.'
		}
	];

	const events = [
		{
			img: '/redesign/ev-trivia.jpg',
			title: 'Geek Trivia',
			body: 'Cake, games, and zero cleanup. We handle the party — you handle the fun.'
		},
		{
			img: '/redesign/ev-tko.jpg',
			title: 'TKO Tuesdays',
			body: 'Rally your crew for an epic session. 500+ games, great food, and drinks on tap.'
		},
		{
			img: '/redesign/ev-reddit.jpg',
			title: 'Reddit Meetup',
			body: 'Book a space for your team or group. Corporate events, meetups, and celebrations.'
		},
		{
			img: '/redesign/ev-magic.jpg',
			title: 'Sunday Night Magic',
			body: "Celebrate your next birthday surrounded by games, friends, and great vibes. We'll take care of the rest."
		},
		{
			img: '/redesign/ev-clock.jpg',
			title: 'Blood on the Clocktower',
			body: 'Elevate your next team outing with exclusive venue packages built for bonding, clients, and celebrations.'
		},
		{
			img: '/redesign/ev-chess.jpg',
			title: 'ChessBar',
			body: 'Compete in organized events across board games and video games. Prize pools, glory, and bragging rights.'
		}
	];
</script>

{#snippet card(img: string, title: string, body: string)}
	<article
		class="relative h-80 overflow-hidden rounded-xl border border-white/[0.08] bg-ink"
	>
		<img src={img} alt={title} class="absolute inset-0 h-full w-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink"></div>
		<div class="absolute inset-x-0 bottom-0 p-6">
			<h3 class="font-heading text-xl font-semibold text-chalk">{title}</h3>
			<p class="mt-2 line-clamp-3 font-body text-sm leading-snug text-chalk/75">{body}</p>
			<a href="#" class="mt-3 inline-block font-heading text-sm font-semibold text-red-bright">
				Learn more →
			</a>
		</div>
	</article>
{/snippet}

<div class="bg-ink font-body text-chalk">
	<!-- HERO -->
	<section class="relative flex min-h-[640px] flex-col overflow-hidden lg:min-h-[864px]">
		<img
			src="/redesign/hero-loft.jpg"
			alt="Level One Game Pub interior"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-ink/20"></div>
		<!-- bottom scrim: lifts CTA legibility and blends the hero into the ink section below -->
		<div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/60 to-transparent"></div>

		<!-- Hero footer block -->
		<div class="relative z-10 mt-auto px-6 pb-12 lg:px-12 lg:pb-16">
			<p class="font-display text-3xl font-black tracking-tight text-chalk lg:text-4xl">
				Pub <span class="text-red">•</span> Kitchen <span class="text-red">•</span> Games
			</p>
			<div class="mt-6 flex flex-wrap gap-4">
				<a
					href="#"
					class="flex h-14 items-center justify-center bg-gradient-to-r from-red to-red-bright px-8 font-display text-lg text-chalk"
				>
					Reserve a Table
				</a>
				<a
					href="/food"
					class="flex h-14 items-center justify-center border-2 border-chalk bg-ink px-8 font-display text-lg text-chalk"
				>
					See the Menu
				</a>
			</div>
		</div>
	</section>

	<!-- ANNOUNCEMENTS -->
	<section class="px-6 py-14 lg:px-16">
		<div class="mb-8 flex items-center justify-between">
			<h2 class="font-display-shadow text-3xl font-black tracking-tight text-chalk lg:text-4xl">Announcements</h2>
			<a href="#" class="font-heading text-[13px] font-semibold tracking-[0.08em] text-chalk/80">View all →</a>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each announcements as a}
				{@render card(a.img, a.title, a.body)}
			{/each}
		</div>
		<div class="mt-8 flex items-center justify-center gap-2.5">
			<span class="h-2 w-6 rounded-full bg-red-bright"></span>
			<span class="h-2 w-2 rounded-full bg-white/25"></span>
			<span class="h-2 w-2 rounded-full bg-white/25"></span>
		</div>
	</section>

	<!-- MENUS -->
	<section class="border-y-4 border-red bg-chalk">
		<!-- Pub: text left, image right -->
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="order-2 flex flex-col justify-center bg-ink px-8 py-12 lg:order-1 lg:px-[90px]">
				<h3 class="font-display text-5xl text-chalk lg:text-6xl">Pub</h3>
				<span class="my-5 block h-1 w-16 bg-red"></span>
				<p class="max-w-md font-body font-black leading-8 text-chalk">
					This is where we could talk about our beers and the like. Maybe we talk about how our beers
					are all craft beers and such I'm just trying to write 3 lines of text for spacing.
				</p>
				<a href="/food" class="mt-6 font-body font-black text-red-bright underline">Explore Drinks →</a>
			</div>
			<div class="relative order-1 h-64 overflow-hidden lg:order-2 lg:h-[432px]">
				<img src="/redesign/menu-beer.jpg" alt="Craft beer" class="h-full w-full object-cover" />
				<!-- blend black panel into photo (panel sits on the left at lg) -->
				<div
					class="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 backdrop-blur-md lg:block [-webkit-mask-image:linear-gradient(to_right,black,transparent)] [mask-image:linear-gradient(to_right,black,transparent)]"
				></div>
				<div
					class="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-ink to-transparent lg:block"
				></div>
			</div>
		</div>
		<!-- Kitchen: image left, text right -->
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="relative h-64 overflow-hidden lg:h-[432px]">
				<img src="/redesign/menu-food.png" alt="Kitchen food" class="h-full w-full object-cover" />
				<!-- blend black panel into photo (panel sits on the right at lg) -->
				<div
					class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 backdrop-blur-lg lg:block [-webkit-mask-image:linear-gradient(to_left,black,transparent)] [mask-image:linear-gradient(to_left,black,transparent)]"
				></div>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-ink to-transparent lg:block"
				></div>
			</div>
			<div class="flex flex-col justify-center bg-ink px-8 py-12 lg:px-[90px]">
				<h3 class="font-display text-5xl text-chalk lg:text-6xl">Kitchen</h3>
				<span class="my-5 block h-1 w-16 bg-red"></span>
				<p class="max-w-md font-body font-black leading-8 text-chalk">
					This is where we could talk about our food and the like. Maybe we talk about how our beers
					are all craft beers and such I'm just trying to write 3 lines of text for spacing.
				</p>
				<a href="/food" class="mt-6 font-body font-black text-red-bright underline">See the Menu →</a>
			</div>
		</div>
	</section>

	<!-- GAMES -->
	<section class="relative overflow-hidden px-6 py-28 text-center lg:py-36">
		<img
			src="/redesign/games-bg.jpg"
			alt=""
			aria-hidden="true"
			class="absolute inset-0 h-full w-full object-cover opacity-10"
		/>
		<div class="relative mx-auto max-w-xl">
			<p class="font-display text-6xl font-black leading-none text-chalk lg:text-8xl">2000+</p>
			<p class="font-display text-6xl font-black leading-none text-chalk lg:text-8xl">GAMES</p>
			<p class="mt-3 font-display text-3xl text-red-bright lg:text-4xl">in our Library</p>
			<p class="mx-auto mt-6 max-w-md font-body text-base text-chalk">
				That doesn't even include all of our cool video games and stuff. We could have some kind of
				info here.
			</p>
			<a href="/board_games" class="mt-6 inline-block font-body font-black text-red-bright underline">
				Browse our Library →
			</a>
		</div>
	</section>

	<!-- EVENTS -->
	<section id="events" class="border-t-4 border-red px-6 py-16 lg:px-16">
		<div class="mb-12 text-center">
			<p class="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-red-bright">
				What's your occasion?
			</p>
			<h2 class="mt-2 font-display text-5xl text-chalk lg:text-6xl">Events</h2>
			<p class="mt-3 font-body text-base text-chalk/50">
				Level One is the perfect venue for parties that are actually fun.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each events as e}
				{@render card(e.img, e.title, e.body)}
			{/each}
		</div>
	</section>

	<!-- RESERVATIONS -->
	<section class="relative overflow-hidden border-t-4 border-red px-6 py-24 text-center">
		<img
			src="/redesign/res-bg.png"
			alt=""
			aria-hidden="true"
			class="absolute inset-0 h-full w-full object-cover opacity-[0.15]"
		/>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(25,20,18,0.88)_100%)]"></div>
		<div class="relative mx-auto flex max-w-xl flex-col items-center gap-5">
			<h2 class="font-display text-5xl tracking-tight text-chalk lg:text-7xl">Ready to Play?</h2>
			<p class="max-w-lg font-body text-base text-chalk/50">
				Secure your spot at Level One. Walk-ins are always welcome, but reservations mean you go
				straight to the good part.
			</p>
			<a
				href="#"
				class="mt-2 rounded bg-gradient-to-r from-red-bright to-red px-14 py-5 font-display text-lg tracking-[0.08em] text-chalk"
			>
				Reserve Now
			</a>
		</div>
	</section>
</div>
