<script lang="ts">
	import { PrismicLink, PrismicText } from '@prismicio/svelte';
	import logo from '$lib/assets/logo/new-logo.png';

	interface Props {
		navigation: any; // Replace with your actual navigation type
	}

	let { navigation }: Props = $props();
</script>

<footer
	class="relative mt-auto w-full bg-gradient-to-br from-surface-800 to-surface-600 text-primary-50"
>
	<div class="relative w-full">
		<div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-3">
				<!-- Socials and Contact Container -->
				<div class="grid grid-cols-1 gap-8 md:col-span-2 md:grid-cols-2">
					<!-- Socials -->
					<div class="flex flex-col items-center space-y-4">
						<h3
							class="bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-lg font-semibold tracking-tight text-transparent"
						>
							Socials
						</h3>
						<div class="flex space-x-6">
							<a
								href="https://www.facebook.com/LevelOneOttawa"
								aria-label="Facebook"
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-200 transition-colors hover:text-secondary-400"
							>
								<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
									<path
										d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
									/>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/levelonegamepub/?hl=en"
								aria-label="Instagram"
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-200 transition-colors hover:text-secondary-400"
							>
								<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
							</a>
							<a
								href="https://www.youtube.com/channel/UCxUrR521vvkLbU_mIE9xLnQ"
								aria-label="Youtube"
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-200 transition-colors hover:text-secondary-400"
							>
								<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
									<path
										d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div class="flex flex-col items-center space-y-4">
						<h3
							class="bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-lg font-semibold tracking-tight text-transparent"
						>
							Contact Us
						</h3>
						<ul class="ml-8 md:ml-0 text-center md:text-left">
							<li class="flex items-center space-x-2">
								<svg
									class="h-4 w-4 text-secondary-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span class="hover:text-secondary-400">
									<a href="mailto:info@levelonegamepub.com" aria-label="email">
										info@levelonegamepub.com
									</a>
								</span>
							</li>
							<li class="flex items-center space-x-2">
								<svg
									class="h-4 w-4 text-secondary-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span class="hover:text-secondary-400">
									<a href="tel:1-613-695-7529">+1 (613) 695-7529</a>
								</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- Quick Links -->
				<div class="flex flex-col items-center space-y-4">
					<h3
						class="bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-lg font-semibold tracking-tight text-transparent"
					>
						Quick Links
					</h3>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-y-2 text-left">
						{#each navigation?.data?.links as item}
							<PrismicLink
								field={item.link}
								class="text-sm text-primary-200 transition-colors hover:text-secondary-400"
							>
								<PrismicText field={item.label} />
							</PrismicLink>
						{/each}
					</div>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="mt-12 border-t border-surface-600 pt-6">
				<p class="text-center text-sm text-primary-200">
					© {new Date().getFullYear()} Level One. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
