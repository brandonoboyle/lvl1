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

<Bounded tag="div" class="relative p-4">
	<div class="rounded-xl bg-surface-800 p-4">
		<form method="POST" action="/api/send-email" on:submit={handleSubmit}>
			<label class="label py-2">
				<span>Name</span>
				<input name="name" class="input bg-surface-700" type="text" placeholder="John Doe" required />
			</label>

			<label class="label py-2">
				<span>Email</span>
				<input name="email" class="input bg-surface-700" type="email" placeholder="John@Doe.com" required />
			</label>

			<label class="label py-2">
				<span>Comment</span>
				<textarea
					name="message"
					class="textarea bg-surface-700"
					placeholder="Get in touch with us!"
					rows="4"
					required
				></textarea>
			</label>

			<div class="mt-4">
				<button
					type="submit"
					class="rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 px-5 py-3 text-2xl font-bold text-primary-50 hover:shadow-lg hover:shadow-tertiary-600"
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
