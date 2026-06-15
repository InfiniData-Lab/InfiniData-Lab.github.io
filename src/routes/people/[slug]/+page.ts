import { getPeople, bySlug } from '$lib/content';
import { error } from '@sveltejs/kit';

export const entries = () => getPeople().map((e) => ({ slug: e.slug }));

export const load = ({ params }: { params: { slug: string } }) => {
	if (!bySlug(getPeople(), params.slug)) error(404, 'Person not found');
	return { slug: params.slug };
};
