// Maps a venue string to a recognizable, publisher-branded badge.
// `group` drives the accent colour (see VenueBadge.svelte); `publisher` is the
// familiar umbrella brand (IEEE, ACM, …) shown as a small prefix where it helps.
// Unknown venues fall back to a neutral badge, so nothing ever breaks.

export interface VenueInfo {
	label: string;
	group: string;
	publisher?: string;
	year?: number;
}

const TABLE: { test: RegExp; label: string; group: string; publisher?: string }[] = [
	{ test: /sigmod\s*workshop|q-?data/i, label: 'SIGMOD Workshop', group: 'acm', publisher: 'ACM' },
	{ test: /sigmod/i, label: 'SIGMOD', group: 'acm', publisher: 'ACM' },
	{ test: /cikm/i, label: 'CIKM', group: 'acm', publisher: 'ACM' },
	{ test: /tkde|trans.*knowl/i, label: 'IEEE TKDE', group: 'ieee' },
	{ test: /ieee\s*access/i, label: 'IEEE Access', group: 'ieee' },
	{ test: /icdew/i, label: 'ICDEW', group: 'ieee', publisher: 'IEEE' },
	{ test: /icde/i, label: 'ICDE', group: 'ieee', publisher: 'IEEE' },
	{ test: /pvldb|vldb\s*endow/i, label: 'PVLDB', group: 'vldb' },
	{ test: /vldb\s*workshop/i, label: 'VLDB Workshop', group: 'vldb' },
	{ test: /cidr/i, label: 'CIDR', group: 'cidr' },
	{ test: /edbt/i, label: 'EDBT', group: 'edbt' },
	{ test: /arxiv|preprint|corr/i, label: 'arXiv', group: 'arxiv' },
	{ test: /icwe|web\s*engineering/i, label: 'ICWE', group: 'springer', publisher: 'Springer' },
	{ test: /wise/i, label: 'WISE', group: 'springer', publisher: 'Springer' },
	{ test: /dapd|distributed.*parallel/i, label: 'DAPD', group: 'springer', publisher: 'Springer' },
	{ test: /ares/i, label: 'ARES', group: 'ares' }
];

export function venueInfo(venue: string): VenueInfo {
	const ym = venue.match(/\b(19|20)\d{2}\b/);
	const year = ym ? Number(ym[0]) : undefined;
	for (const row of TABLE) {
		if (row.test.test(venue)) {
			return { label: row.label, group: row.group, publisher: row.publisher, year };
		}
	}
	// Unknown venue: keep the original text (minus any trailing year), neutral colour.
	return { label: venue.replace(/\s*\b(19|20)\d{2}\b\s*/, ' ').trim(), group: 'other', year };
}
