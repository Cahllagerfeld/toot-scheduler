<script lang="ts">
	export let value: string;
	export let label = '';
	let className = '';
	export { className as class };
	export let id = '';
</script>

{#if label}
	<label class="block cursor-pointer text-label" for={id}>{@html label}</label>
{/if}
<textarea
	{id}
	on:change
	bind:value
	class="box-border w-full rounded-lg border-[1px] border-dark-4 bg-card py-2 px-4 focus:border-primary-main focus:shadow-inset-1 focus:outline-none dark:border-dark-1 {className}"
	{...$$restProps}
/>
