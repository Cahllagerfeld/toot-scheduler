<script lang="ts">
	import Card from '$lib/components/atoms/card.svelte';
	import Button from '$lib/components/atoms/button.svelte';
	import Input from '$lib/components/atoms/input.svelte';
	import Poll from '$lib/components/organism/poll.svelte';
	import Toot from '../lib/components/organism/toot.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let accessToken = '';
	let serverURL = '';
</script>

<div class="flex flex-col gap-8">
	<Card class="mt-8">
		<form method="post" action="?/loginMastodon" use:enhance class="flex flex-col gap-4">
			<div>
				<Input
					name="server-url"
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
					name="access-token"
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
		<Toot {accessToken} disableTextarea={!form?.tootDisabled} {serverURL} />
	</Card>
	<Card>
		<Poll />
	</Card>
</div>
