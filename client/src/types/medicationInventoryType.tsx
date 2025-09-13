export interface MedicationInventory {
	id: string;
	name: string;
	form: string; // Tablet, Injection, Syrup
	strength: string; // 500mg, 10ml
	batchNumber: string;
	quantity: number;
	reorderLevel: number;
	status:
		| 'IN_STOCK'
		| 'LOW_STOCK'
		| 'OUT_OF_STOCK'
		| 'ON_ORDER'
		| 'ARRIVED'
		| 'EXPIRED'
		| 'RESERVED';
	supplier?: string;
	orderDate?: string;
	arrivalDate?: string;
	expiryDate?: string;
	reservedFor?: string;
	createdAt: string;
	updatedAt: string;
}
