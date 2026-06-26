// Site-wide metadata and navigation.
// Later this can be backed by the CMS `siteSettings` singleton; for now it is the single source of truth.

export const site = {
	name: 'Infinidata Lab',
	tagline: 'Data management for the age of AI',
	description:
		'Infinidata Lab at TU Delft builds data systems for the age of AI and quantum computing — bringing machine learning to the data lake, and reinventing data management for quantum processors.',
	institution: 'Delft University of Technology',
	faculty: 'Faculty of EEMCS · Web Information Systems',
	pi: 'Dr. Rihan Hai',
	email: 'R.Hai@tudelft.nl',
	address: 'Building 28, Van Mourik Broekmanweg 6, 2628 XE Delft',
	socials: {
		linkedin: 'https://www.linkedin.com/company/infinidata-lab/',
		github: 'https://github.com/infinidata-team',
		scholar: 'https://scholar.google.com/citations?user=vD8M9R0AAAAJ'
	}
};

export const navLinks = [
	{ href: '/research', label: 'Research' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/publications', label: 'Publications' },
	{ href: '/people', label: 'People' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/events', label: 'Events' }
];

// Author display names that belong to the group — highlighted in publication author lists.
export const internalAuthors = [
	'Rihan Hai',
	'Tim Littau',
	'Wenbo Sun',
	'Aditya Shankar',
	'Danning Zhan',
	'Yuandou Wang',
	'Ziyu Li'
];
