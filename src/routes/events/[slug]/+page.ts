import { getEvents, bySlug } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

// An empty CMS collection has no detail pages to prerender.
export const prerender = getEvents().length > 0;

export const entries: EntryGenerator = () => getEvents().map((event) => ({ slug: event.slug }));

export const load: PageLoad = ({ params }) => {
	if (!bySlug(getEvents(), params.slug)) error(404, 'Event not found');
	return { slug: params.slug };
};
