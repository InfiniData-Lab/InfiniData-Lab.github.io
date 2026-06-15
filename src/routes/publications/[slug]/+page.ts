import { getPublications, bySlug } from '$lib/content';
import { error } from '@sveltejs/kit';

export const entries = () => getPublications().map((e) => ({ slug: e.slug }));

export const load = ({ params }: { params: { slug: string } }) => {
	if (!bySlug(getPublications(), params.slug)) error(404, 'Publication not found');
	return { slug: params.slug };
};
