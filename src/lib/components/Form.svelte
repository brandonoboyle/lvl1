<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';

	let submitting = false;
	let success = false;
	let error = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		submitting = true;
		success = false;
		error = '';

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				body: formData
			});

			const result = await response.json();

			if (result.success) {
				// Clear form on success
				success = true;
				form.reset(); 
			} else {
				error = result.error || 'Failed to send message';
			}
		} catch (err) {
			error = 'Failed to send message';
		} finally {
			submitting = false;
		}
	}
</script>

<Bounded tag="div" class="relative bg-ink-noise p-4 font-body text-chalk">
	<div class="rounded-xl border border-white/10 bg-ink p-4">
		<form method="POST" action="/api/send-email" on:submit={handleSubmit}>
			<label class="label py-2">
				<span>Name</span>
				<input
					name="name"
					class="input border border-white/10 bg-chalk text-ink placeholder:text-ink/40 focus:border-red-bright"
					type="text"
					placeholder="John Doe"
					required
				/>
			</label>

			<label class="label py-2">
				<span>Email</span>
				<input
					name="email"
					class="input border border-white/10 bg-chalk text-ink placeholder:text-ink/40 focus:border-red-bright"
					type="email"
					placeholder="John@Doe.com"
					required
				/>
			</label>

			<label class="label py-2">
				<span>Comment</span>
				<textarea
					name="message"
					class="textarea border border-white/10 bg-chalk text-ink placeholder:text-ink/40 focus:border-red-bright"
					placeholder="Get in touch with us!"
					rows="4"
					required
				></textarea>
			</label>

			<div class="mt-4">
				<button
					type="submit"
					class="rounded-xl bg-gradient-to-br from-red to-red-bright px-5 py-3 font-display text-2xl font-black text-chalk hover:shadow-lg hover:shadow-red/40"
					disabled={submitting}
				>
					{submitting ? 'Sending...' : 'Submit'}
				</button>

				{#if success}
					<p class="mt-4 text-chalk">Message sent successfully!</p>
				{:else if error}
					<p class="mt-4 text-red-bright">{error}</p>
				{/if}
			</div>
		</form>
	</div>
</Bounded>
