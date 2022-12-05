<script lang="ts">
	import Textarea from '$lib/components/atoms/textarea.svelte';
	import { zonedTimeToUtc } from 'date-fns-tz';
	import Button from '$lib/components/atoms/button.svelte';

	let toot = '';
	let tootForm: HTMLFormElement;

	let scheduled = Date.now();

	export let serverURL: string;
	export let accessToken: string;
	export let disableTextarea: boolean;

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

<section>
	<form bind:this={tootForm} class="flex flex-col gap-4" on:submit|preventDefault={handleSchedule}>
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
</section>
