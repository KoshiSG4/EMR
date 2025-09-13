export const MEDICATION_UNITS = [
	{
		key: 'Solid / Weight-based',
		units: [
			'mg', // milligram
			'g', // gram
			'mcg', // microgram
			'mEq', // milliequivalents
			'tablet(s)',
			'capsule(s)',
			'suppository(ies)',
			'sachet(s)',
		],
	},
	{
		key: 'Liquid / Volume-based',
		units: [
			'mL', // milliliter
			'L', // liter
			'drop(s)',
		],
	},
	{
		key: 'Inhaled / Topical',
		units: [
			'puff(s)',
			'spray(s)',
			'patch(es)',
			'application(s)', // creams/ointments
		],
	},
	{
		key: 'Biological / Special',
		units: [
			'IU', // international units
			'unit(s)', // insulin, heparin
		],
	},
];
