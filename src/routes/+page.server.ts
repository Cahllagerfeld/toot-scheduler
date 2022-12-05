import type { Actions } from './$types';

export const actions: Actions = {
	loginMastodon: async ({ request, cookies }) => {
		const data = await request.formData();
		const token = data.get('access-token');
		const serverURL = data.get('server-url');

		const endpoint = `${serverURL}/api/v1/accounts/verify_credentials`;
		const headers = { Authorization: `Bearer ${token}` };

		const res = await fetch(endpoint, { method: 'GET', headers });

		if (res.ok) {
			const resData = await res.json();
			cookies.set('logged-in-user', resData.username, { httpOnly: true });
			return { success: true, tootDisabled: false };
		}

		return { success: false, tootDisabled: true };
	}
};
