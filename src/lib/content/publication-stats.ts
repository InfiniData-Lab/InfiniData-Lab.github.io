import type { Publication } from './types';

const normalizeTitle = (title: string) =>
	title.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}+]/gu, '');

const normalizeDoi = (doi?: string) =>
	doi?.trim().toLowerCase().replace(/^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)/, '');

const normalizeArxiv = (arxiv?: string) =>
	arxiv?.trim().toLowerCase().replace(/^https?:\/\/arxiv\.org\/(?:abs|pdf)\//, '')
		.replace(/\.pdf$/, '').replace(/v\d+$/, '');

/** Conference outputs, including demos, tutorials and symposium papers.
 * PVLDB is journal-published conference proceedings; standalone journals do not count.
 * Keep this scope in sync with docs/publication-audit.md and the homepage CMS note.
 */
export function conferencePublications<T extends { meta: Publication }>(
	entries: T[], since: number, through = new Date().getUTCFullYear()
): T[] {
	const titles = new Set<string>();
	const dois = new Set<string>();
	const arxivIds = new Set<string>();
	return entries.filter(({ meta: p }) => {
		if (p.year < since || p.year > through) return false;
		if (p.type !== 'conference' && p.type !== 'demo' &&
			!(p.type === 'journal' && /^(?:PVLDB|Proceedings of the VLDB Endowment)$/i.test(p.venue.trim()))) return false;

		const title = normalizeTitle(p.title);
		const doi = normalizeDoi(p.links?.doi);
		const arxiv = normalizeArxiv(p.links?.arxiv);
		const duplicate = titles.has(title) || !!(doi && dois.has(doi)) || !!(arxiv && arxivIds.has(arxiv));
		titles.add(title);
		if (doi) dois.add(doi);
		if (arxiv) arxivIds.add(arxiv);
		return !duplicate;
	});
}
