declare global {
	interface Window {
		snUserToken?: string;
	}
}

import { ServiceNowClient as SNClient } from '@kobidev/now-sdk';
export const client = import.meta.env.DEV
	? new SNClient({
			baseUrl: '/api',
			auth: {
				username: import.meta.env.VITE_USER_NAME,
				password: import.meta.env.VITE_PASSWORD
			}
		})
	: new SNClient({
			baseUrl: '/api/now/table/',
			csrfToken: window?.snUserToken || ''
		});
