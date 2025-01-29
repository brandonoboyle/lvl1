<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { enhance } from '$app/forms';
	
	let submitting = false;
	let success = false;
	let error = '';
</script>

<Bounded tag="div" class="relative">
	<div class="rounded-xl bg-surface-800 p-4">
		<form
			method="POST"
			use:enhance
		>
			<label class="label py-2">
				<span>Name</span>
				<input name="name" class="input" type="text" placeholder="John Doe" required />
			</label>

			<label class="label py-2">
				<span>Email</span>
				<input name="email" class="input" type="email" placeholder="John@Doe.com" required />
			</label>

			<label class="label py-2">
				<span>Comment</span>
				<textarea name="message" class="textarea" placeholder="Get in touch with us!" rows="4" required></textarea>
			</label>

			<div class="mt-4">
				<button
					type="submit"
					class="variant-glass-tertiary hover:variant-ghost-tertiary px-5 py-3 text-2xl font-bold rounded-xl"
					disabled={submitting}
				>
					{submitting ? 'Sending...' : 'Submit'}
				</button>
				
				{#if success}
					<p class="mt-4 text-success-500">Message sent successfully!</p>
				{:else if error}
					<p class="mt-4 text-error-500">{error}</p>
				{/if}
			</div>
		</form>
	</div>
</Bounded>