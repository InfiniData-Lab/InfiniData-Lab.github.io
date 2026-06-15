import { getBlogPosts, bySlug } from '$lib/content';
import { error } from '@sveltejs/kit';

export const entries = () => getBlogPosts().map((e) => ({ slug: e.slug }));

export const load = ({ params }: { params: { slug: string } }) => {
	if (!bySlug(getBlogPosts(), params.slug)) error(404, 'Post not found');
	return { slug: params.slug };
};
