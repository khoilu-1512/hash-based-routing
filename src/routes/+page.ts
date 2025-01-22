import { client } from '$lib/client';
import type { PageLoad } from './$types';

interface Incident {
	number: string;
	short_description: string;
	description: string;
	caller_id: string;
}

export const load: PageLoad = () => {
	return {
		incidents: client.select(['number']).from<Incident>('incident').limit(10).findMany()
	};
};
