export type Role = 'PI' | 'Postdoc' | 'PhD' | 'MSc' | 'Visiting' | 'Alumni';

export interface PersonLinks {
	scholar?: string;
	dblp?: string;
	github?: string;
	linkedin?: string;
	website?: string;
	email?: string;
}

export interface Person {
	name: string;
	role: Role;
	title?: string;
	photo?: string;
	interests?: string[];
	links?: PersonLinks;
	order?: number;
	featured?: boolean;
}

export interface Project {
	name: string;
	tagline?: string;
	status?: 'active' | 'completed';
	pillars?: string[];
	tags?: string[];
	venue?: string;
	award?: string;
	links?: {
		github?: string;
		paper?: string;
		dataset?: string;
		demo?: string;
		website?: string;
	};
	image?: string;
	featured?: boolean;
	order?: number;
}

export interface Publication {
	title: string;
	authors: string[];
	year: number;
	venue: string;
	type?: 'conference' | 'journal' | 'workshop' | 'preprint' | 'demo';
	pillars?: string[];
	award?: string;
	links?: {
		pdf?: string;
		doi?: string;
		arxiv?: string;
		code?: string;
		dataset?: string;
		slides?: string;
		video?: string;
	};
	featured?: boolean;
}

export interface BlogPost {
	title: string;
	date: string;
	authors?: string[];
	excerpt?: string;
	cover?: string;
	tags?: string[];
	featured?: boolean;
}

export interface EventItem {
	title: string;
	type?: 'keynote' | 'talk' | 'workshop' | 'conference' | 'panel' | 'seminar';
	startDate: string;
	endDate?: string;
	location?: string;
	people?: string[];
	links?: {
		slides?: string;
		video?: string;
		recording?: string;
		external?: string;
	};
	featured?: boolean;
}
