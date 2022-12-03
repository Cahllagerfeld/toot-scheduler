<script lang="ts">
	import Card from '$lib/components/atoms/card.svelte';
	import Button from '$lib/components/atoms/button.svelte';
	import Input from '$lib/components/atoms/input.svelte';
	import Textarea from '../lib/components/atoms/textarea.svelte';
	import { zonedTimeToUtc } from 'date-fns-tz';

	let accessToken = '';
	let serverURL = '';

	let scheduled = Date.now();
	let disableTextarea = true;
	let toot = '';
	let tootForm: HTMLFormElement;

	const loginHandler = async () => {
		const endpoint = `${serverURL}/api/v1/accounts/verify_credentials`;
		const headers = { Authorization: `Bearer ${accessToken}` };

		const res = await fetch(endpoint, { method: 'GET', headers });
		if (res.ok) {
			const data = await res.json();
			console.log(data);
			disableTextarea = false;
		}
	};

	const handleSchedule = async () => {
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const utcTime = zonedTimeToUtc(scheduled, timezone).toISOString();

		const endpoint = `${serverURL}/api/v1/statuses`;
		const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };
		const body = { status: toot, scheduled_at: utcTime };

		const res = await fetch(endpoint, {
			method: 'POST',
			headers,
			body: JSON.stringify(body)
		});

		if (res.ok) {
			const data = await res.json();
			console.log(data);
			tootForm.reset();
		}
	};
</script>

<div class="flex flex-col gap-8">
	<Card class="mt-8">
		<form on:submit|preventDefault={loginHandler} class="flex flex-col gap-4">
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
				<Button type="submit">Login</Button>
			</div>
		</form>
	</Card>

	<Card>
		<form
			bind:this={tootForm}
			class="flex flex-col gap-4"
			on:submit|preventDefault={handleSchedule}
		>
			<div>
				<Textarea label="Your toot" required rows="6" class="resize-none" bind:value={toot} />
			</div>
			<div>
				<input
					required
					class="rounded-lg border border-dark-4 p-2 focus:border-primary-main focus:shadow-inset-1 dark:border-dark-1"
					bind:value={scheduled}
					type="datetime-local"
				/>
			</div>
			<div>
				<Button disabled={disableTextarea} type="submit">Schedule</Button>
			</div>
		</form>
	</Card>
</div>
