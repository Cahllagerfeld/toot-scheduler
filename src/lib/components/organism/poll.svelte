<script lang="ts">
	import Button from '$lib/components/atoms/button.svelte';
	import Input from '../atoms/input.svelte';

	let pollForm: HTMLFormElement;
	let newOption = '';
	let options: string[] = [];

	let addNewOption = () => {
		options = [...options, newOption];
		newOption = '';
		pollForm.reset();
	};
</script>

<section>
	<ul>
		{#each options as option}
			<li>
				{option}
			</li>
		{/each}
	</ul>
	<form class="space-y-4" bind:this={pollForm} on:submit|preventDefault={addNewOption}>
		<Input required placeholder="New Option" id="new-option" bind:value={newOption} />
		<Button type="submit">Add Option</Button>
	</form>
</section>
