// Dataset descriptions and filter labels from the supplied QEC Model Zoo page.
export interface QecDataset {
	id: string;
	category: string;
	distance: string;
	platform: string;
	symbolClass: string;
	symbol: string;
	distanceLabel: string;
	title: string;
	code: string;
	description: string;
	source: string;
	platformLabel: string;
}

export interface DatasetSelection {
	code: string;
	distance: string;
	platform: string;
}

export const datasets: QecDataset[] = [
	{
		"id": "dataset-1",
		"category": "surface",
		"distance": "3",
		"platform": "superconducting",
		"symbolClass": "surface",
		"symbol": "▦",
		"distanceLabel": "Distance 3",
		"title": "Google Surface D3",
		"code": "Surface code",
		"description": "Distance-3 surface-code memory experiments on Google’s Sycamore processor.",
		"source": "Google · Sycamore",
		"platformLabel": "Superconducting"
	},
	{
		"id": "dataset-2",
		"category": "surface",
		"distance": "5",
		"platform": "superconducting",
		"symbolClass": "surface",
		"symbol": "▦",
		"distanceLabel": "Distance 5",
		"title": "Google Surface D5",
		"code": "Surface code",
		"description": "Distance-5 surface-code memory data for studying performance across code distances.",
		"source": "Google · Sycamore",
		"platformLabel": "Superconducting"
	},
	{
		"id": "dataset-3",
		"category": "surface",
		"distance": "3",
		"platform": "neutral-atoms",
		"symbolClass": "surface",
		"symbol": "▦",
		"distanceLabel": "Distance 3",
		"title": "Lukin D3",
		"code": "Surface code",
		"description": "Repeated surface-code error correction with detection of qubit loss.",
		"source": "Lukin group",
		"platformLabel": "Neutral atoms"
	},
	{
		"id": "dataset-4",
		"category": "surface",
		"distance": "5",
		"platform": "neutral-atoms",
		"symbolClass": "surface",
		"symbol": "▦",
		"distanceLabel": "Distance 5",
		"title": "Lukin D5",
		"code": "Surface code",
		"description": "Distance-5 surface-code experiments with repeated error correction and loss detection.",
		"source": "Lukin group",
		"platformLabel": "Neutral atoms"
	},
	{
		"id": "dataset-5",
		"category": "color",
		"distance": "3",
		"platform": "superconducting",
		"symbolClass": "color",
		"symbol": "⬡",
		"distanceLabel": "Distance 3",
		"title": "Google Color D3",
		"code": "Color code",
		"description": "Distance-3 color-code experiments on Google’s Willow processor.",
		"source": "Google · Willow",
		"platformLabel": "Superconducting"
	},
	{
		"id": "dataset-6",
		"category": "color",
		"distance": "5",
		"platform": "superconducting",
		"symbolClass": "color",
		"symbol": "⬡",
		"distanceLabel": "Distance 5",
		"title": "Google Color D5",
		"code": "Color code",
		"description": "Distance-5 color-code data for studying scaling across code distances.",
		"source": "Google · Willow",
		"platformLabel": "Superconducting"
	},
	{
		"id": "dataset-7",
		"category": "repetition",
		"distance": "3",
		"platform": "superconducting",
		"symbolClass": "repetition",
		"symbol": "≋",
		"distanceLabel": "Distance 3",
		"title": "DiCarlo D3",
		"code": "Repetition code",
		"description": "Distance-3 repetition-code experiments from the DiCarlo research group.",
		"source": "DiCarlo group",
		"platformLabel": "Superconducting"
	},
	{
		"id": "dataset-8",
		"category": "repetition",
		"distance": "25",
		"platform": "superconducting",
		"symbolClass": "repetition",
		"symbol": "≋",
		"distanceLabel": "Distance 25",
		"title": "Google Repetition D25",
		"code": "Repetition code",
		"description": "Distance-25 bit-flip repetition-code experiments on Sycamore, using 49 qubits.",
		"source": "Google · Sycamore",
		"platformLabel": "Superconducting"
	},
	{
		"id": "dataset-9",
		"category": "parity",
		"distance": "none",
		"platform": "spin-qubit",
		"symbolClass": "other",
		"symbol": "✦",
		"distanceLabel": "No distance",
		"title": "Vandersypen",
		"code": "Parity checks",
		"description": "Spin-qubit parity-check and multi-qubit entanglement experiments.",
		"source": "Vandersypen group",
		"platformLabel": "Spin qubits"
	}
];

export function filterDatasets(entries: QecDataset[], selection: DatasetSelection): QecDataset[] {
	return entries.filter((dataset) =>
		(selection.code === 'all' || dataset.category === selection.code) &&
		(selection.distance === 'all' || dataset.distance === selection.distance) &&
		(selection.platform === 'all' || dataset.platform === selection.platform)
	);
}
