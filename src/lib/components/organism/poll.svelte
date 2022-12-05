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

	const removeOption = (index: number) => {
		options = options.filter((_, i) => i !== index);
	};
</script>

<section class="flex flex-col gap-4">
	<ul class="space-y-4">
		{#each options as option, index}
			<li class="flex items-center justify-between">
				{option}
				<Button on:click={() => removeOption(index)} variant="red">Delete</Button>
			</li>
		{/each}
	</ul>
	<form class="space-y-4" bind:this={pollForm} on:submit|preventDefault={addNewOption}>
		<Input required placeholder="New Option" id="new-option" bind:value={newOption} />
		<Button type="submit">Add Option</Button>
	</form>
</section>
