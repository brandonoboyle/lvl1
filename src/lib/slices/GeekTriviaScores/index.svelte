<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let slice: Content.GeekTriviaScoresSlice;
</script>

<div class="flex h-full w-full items-center justify-center py-4">
	<iframe
		title="Geek Trivia Scores"
		class="h-[460px] w-4/5 md:w-1/2"
		src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS60bJlqQvYhAtqt2Y7SEa45QEikEjohTlWL3J1_XgC52H4rkigjEt8JznGWjl86bw4f6wvd4nRlM1O/pubhtml?widget=true&amp;headers=false"
	></iframe>
</div>
