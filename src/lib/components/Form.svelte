<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
</script>

<Bounded tag="div" yPadding="sm" class="relative">
	<div class="rounded-xl bg-surface-800 p-4">
		<label class="label py-2">
			<span>Name</span>
			<input class="input" type="text" placeholder="Name" />
		</label>

		<label class="label py-2">
			<span>Email</span>
			<input class="input" type="text" placeholder="Email" />
		</label>

		<label class="label py-2">
			<span>Comment</span>
			<textarea class="textarea" rows="4" placeholder="Comment here" />
		</label>
	</div>
</Bounded>
