import { getProjects, bySlug } from '$lib/content';
import { error } from '@sveltejs/kit';

export const entries = () => getProjects().map((e) => ({ slug: e.slug }));

export const load = ({ params }: { params: { slug: string } }) => {
	if (!bySlug(getProjects(), params.slug)) error(404, 'Project not found');
	return { slug: params.slug };
};
