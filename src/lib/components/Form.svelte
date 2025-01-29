<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
</script>

<Bounded tag="div" class="relative">
	<div class="rounded-xl bg-surface-800 p-4">
		<label class="label py-2">
			<span>Name</span>
			<input class="input" type="text" placeholder="John Doe" />
		</label>

		<label class="label py-2">
			<span>Email</span>
			<input class="input" type="text" placeholder="John@Doe.com" />
		</label>

		<label class="label py-2">
			<span>Comment</span>
			<textarea class="textarea" placeholder="Get in touch with us!" rows="4"></textarea>
			<button type="submit" class="variant-glass-tertiary hover:variant-ghost-tertiary px-5 py-3 text-2xl font-bold rounded-xl">Submit</button>
		</label>
	</div>
</Bounded>