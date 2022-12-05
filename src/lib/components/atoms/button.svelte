<script lang="ts">
	let className = '';
	export { className as class };
	export let disabled = false;
	export let variant: 'primary' | 'red' | 'purple' = 'primary';
	export let type: 'submit' | 'button' = 'button';

	const colorMap = {
		primary:
			'bg-primary-main hover:bg-primary-lighter focus:outline-primary-lighter active:bg-primary-darker',
		red: 'bg-red-main hover:bg-red-lighter focus:outline-red-lighter active:bg-red-darker',
		purple:
			'bg-purple-main hover:bg-purple-lighter focus:outline-purple-lighter active:bg-purple-darker'
	};
</script>

<button
	{type}
	class="default-transition rounded-lg px-4 py-2 text-light-4 shadow-button {colorMap[
		variant
	]} {disabled ? 'pointer-events-none bg-primary-lighter' : ''} {className}"
	on:submit
	on:click
	{disabled}
	{...$$restProps}
>
	<slot />
</button>
