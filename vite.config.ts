import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		hmr: {
			clientPort: process.env.HMR_HOST ? 443 : 5173,
			host: process.env.HMR_HOST ? new URL(process.env.HMR_HOST).hostname : 'localhost'
		}
	}
};

export default config;
