<script lang="ts">
	import Card from '$lib/components/atoms/card.svelte';
	import Button from '$lib/components/atoms/button.svelte';
	import Input from '$lib/components/atoms/input.svelte';

	let accessToken = '';
	let serverURL = '';

	const loginHandler = async () => {
		const endpoint = `${serverURL}/api/v1/accounts/verify_credentials`;
		const headers = { Authorization: `Bearer ${accessToken}` };

		const res = await fetch(endpoint, { method: 'GET', headers });
		if (res.ok) {
			const data = await res.json();
			console.log(data);
		}
	};
</script>

<Card class="mt-8">
	<form on:submit|preventDefault={loginHandler} class="flex flex-col gap-4">
		<div>
			<Input
				type="password"
				required
				bind:value={accessToken}
				label="Token"
				placeholder="Your token"
				id="access-token"
			/>
		</div>
		<div>
			<Input
				type="text"
				required
				bind:value={serverURL}
				label="Server URL"
				placeholder="Your Server URL"
				id="server-url"
			/>
		</div>
		<div>
			<Button type="submit">Login</Button>
		</div>
	</form>
</Card>
