<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';

	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');
	let emailMatch = $state(true);

	// Time options for the dropdown
	const timeOptions = [
		'10:00 AM',
		'11:00 AM',
		'12:00 PM',
		'1:00 PM',
		'2:00 PM',
		'3:00 PM',
		'4:00 PM',
		'5:00 PM',
		'6:00 PM',
		'7:00 PM',
		'8:00 PM',
		'9:00 PM',
		'10:00 PM'
	];

	// Game type options
	const gameTypeOptions = [
		{ value: 'board-games', label: 'Board Games' },
		{ value: 'video-games', label: 'Video Games' },
		{ value: 'both', label: 'Both' }
	];

	// Payment arrangement options
	const paymentOptions = [
		{ value: 'individual', label: 'Paid individually' },
		{ value: 'one-bill', label: 'All on one bill' },
		{ value: 'other', label: 'Other' }
	];

	function validateEmailMatch(email: string, confirmEmail: string) {
		emailMatch = email === confirmEmail;
		return emailMatch;
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		submitting = true;
		success = false;
		error = '';

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		// Validate email match
		const email = formData.get('email') as string;
		const confirmEmail = formData.get('confirmEmail') as string;
		
		if (!validateEmailMatch(email, confirmEmail)) {
			error = 'Email addresses do not match';
			submitting = false;
			return;
		}

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				body: formData
			});

			const result = await response.json();

			if (result.success) {
				success = true;
				form.reset();
			} else {
				error = result.error || 'Failed to send reservation request';
			}
		} catch (err) {
			error = 'Failed to send reservation request';
		} finally {
			submitting = false;
		}
	}
</script>

<Bounded tag="section">
	<div class="mx-auto max-w-4xl">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-heading font-bold text-primary-500 mb-4">
				Large Group Reservation
			</h2>
			<p class="text-lg max-w-2xl mx-auto">
				If your group is over 10 people, please fill out the form below.
			</p>
		</div>

		<div class="rounded-xl bg-surface-800 p-6 md:p-8">
			<form method="POST" action="/api/send-email" onsubmit={handleSubmit}>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<!-- Organizer Name -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Organizer Name *</span>
						<input 
							name="organizerName" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							type="text" 
							placeholder="John Doe" 
							required 
						/>
					</label>

					<!-- Contact Phone -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Contact Phone Number *</span>
						<input 
							name="phone" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							type="tel" 
							placeholder="(555) 123-4567" 
							required 
						/>
					</label>

					<!-- Contact Email -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Contact Email Address *</span>
						<input 
							name="email" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							type="email" 
							placeholder="john@example.com" 
							required 
						/>
					</label>

					<!-- Confirm Email -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Confirm Email Address *</span>
						<input 
							name="confirmEmail" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500 {!emailMatch ? 'border-error-500' : ''}" 
							type="email" 
							placeholder="john@example.com" 
							required 
							oninput={(e) => {
								const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value;
								validateEmailMatch(email, (e.target as HTMLInputElement)?.value || '');
							}}
						/>
						{#if !emailMatch}
							<p class="text-error-500 text-sm mt-1">Email addresses do not match</p>
						{/if}
					</label>

					<!-- Organization Name (Optional) -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Organization Name</span>
						<input 
							name="organization" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							type="text" 
							placeholder="Business Inc." 
						/>
					</label>

					<!-- Number of People -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Number of People *</span>
						<input 
							name="peopleCount" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							type="number" 
							placeholder="25" 
							min="1"
							required 
						/>
					</label>

					<!-- Date -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Preferred Date *</span>
						<input 
							name="date" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							type="date" 
							required 
						/>
					</label>

					<!-- Time -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Preferred Time *</span>
						<select 
							name="time" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							required
						>
							<option value="">Select a time</option>
							{#each timeOptions as time}
								<option value={time}>{time}</option>
							{/each}
						</select>
					</label>

					<!-- Game Type -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Game Type *</span>
						<select 
							name="gameType" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							required
						>
							<option value="">Select game type</option>
							{#each gameTypeOptions as option}
								<option value={option.value}>{option.label}</option>
							{/each}
						</select>
					</label>

					<!-- Payment Arrangements -->
					<label class="label py-2">
						<span class="text-primary-400 font-medium">Payment Arrangements *</span>
						<select 
							name="paymentArrangements" 
							class="input bg-surface-700 border-surface-600 focus:border-primary-500" 
							required
						>
							<option value="">Select payment option</option>
							{#each paymentOptions as option}
								<option value={option.value}>{option.label}</option>
							{/each}
						</select>
					</label>
				</div>

				<!-- Additional Requirements -->
				<label class="label py-2 mt-6">
					<span class="text-primary-400 font-medium">Additional Requirements</span>
					<textarea
						name="additionalRequirements"
						class="textarea bg-surface-700 border-surface-600 focus:border-primary-500"
						placeholder="Any special requests, dietary restrictions, accessibility needs, or other requirements..."
						rows="4"
					></textarea>
				</label>

				<!-- Submit Button -->
				<div class="mt-8 text-center">
					<button
						type="submit"
						class="rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 px-8 py-4 text-xl font-bold text-primary-50 hover:shadow-lg hover:shadow-tertiary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={submitting || !emailMatch}
					>
						{submitting ? 'Submitting...' : 'Submit Reservation Request'}
					</button>

					{#if success}
						<p class="mt-6 text-success-500 text-lg font-medium">
							Reservation request sent successfully! We'll get back to you within 24 hours.
						</p>
					{:else if error}
						<p class="mt-6 text-error-500 text-lg font-medium">{error}</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</Bounded>
