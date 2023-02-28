<script lang="ts">
	let className = "";
	export { className as class };
</script>

<div class="rounded-lg bg-card p-6 shadow-default {className}">
	<slot />
</div>
