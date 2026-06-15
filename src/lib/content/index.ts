import type { Component } from 'svelte';
import type { Person, Project, Publication, BlogPost, EventItem } from './types';

export interface Entry<T> {
	slug: string;
	meta: T;
	component: Component;
}

type Mod<T> = { metadata: T; default: Component };

function toEntries<T>(mods: Record<string, Mod<T>>): Entry<T>[] {
	return Object.entries(mods).map(([path, mod]) => ({
		slug: path.split('/').pop()!.replace(/\.md$/, ''),
		meta: mod.metadata,
		component: mod.default
	}));
}

// import.meta.glob needs a literal pattern, so each collection inlines its own.

export function getPeople(): Entry<Person>[] {
	const mods = import.meta.glob('/src/content/people/*.md', { eager: true }) as Record<string, Mod<Person>>;
	return toEntries<Person>(mods).sort((a, b) => (a.meta.order ?? 99) - (b.meta.order ?? 99));
}

export function getProjects(): Entry<Project>[] {
	const mods = import.meta.glob('/src/content/projects/*.md', { eager: true }) as Record<string, Mod<Project>>;
	return toEntries<Project>(mods).sort((a, b) => (a.meta.order ?? 99) - (b.meta.order ?? 99));
}

export function getPublications(): Entry<Publication>[] {
	const mods = import.meta.glob('/src/content/publications/*.md', { eager: true }) as Record<string, Mod<Publication>>;
	return toEntries<Publication>(mods).sort(
		(a, b) => b.meta.year - a.meta.year || a.meta.title.localeCompare(b.meta.title)
	);
}

export function getBlogPosts(): Entry<BlogPost>[] {
	const mods = import.meta.glob('/src/content/blog/*.md', { eager: true }) as Record<string, Mod<BlogPost>>;
	return toEntries<BlogPost>(mods).sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
}

export function getEvents(): Entry<EventItem>[] {
	const mods = import.meta.glob('/src/content/events/*.md', { eager: true }) as Record<string, Mod<EventItem>>;
	return toEntries<EventItem>(mods).sort(
		(a, b) => +new Date(b.meta.startDate) - +new Date(a.meta.startDate)
	);
}

export const bySlug = <T>(entries: Entry<T>[], slug: string): Entry<T> | undefined =>
	entries.find((e) => e.slug === slug);

export const featured = <T extends { featured?: boolean }>(entries: Entry<T>[]): Entry<T>[] =>
	entries.filter((e) => e.meta.featured);
