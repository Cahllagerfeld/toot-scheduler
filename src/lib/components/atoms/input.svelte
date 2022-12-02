<script lang="ts">
	export let value: string | number;
	export let label = '';
	let className = '';
	export { className as class };
	export let id: string;
</script>

{#if label}
	<label class="block cursor-pointer text-label" for={id}>{@html label}</label>
{/if}
<input
	{id}
	on:change
	bind:value
	class="box-border w-full rounded-lg border-[1px] border-dark-4 bg-card py-2 px-4 focus:border-primary-main focus:shadow-inset-1 dark:border-dark-1 {className}"
	{...$$restProps}
/>

<style>
	input:focus {
		outline: none;
	}
</style>
