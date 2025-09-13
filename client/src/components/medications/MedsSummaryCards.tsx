import { Card, CardHeader, CardTitle } from '../ui/card';
import {
	AlertTriangle,
	Bookmark,
	CheckCircle,
	Clock,
	Package,
	Truck,
	XCircle,
} from 'lucide-react';
import { MedicationInventory } from '@/types/medicationInventoryType';

interface MedcationSummaryCardsProps {
	medications: MedicationInventory[];
}

const MedsSummaryCards = ({ medications }: MedcationSummaryCardsProps) => {
	const summaryData = [
		{ label: 'IN_STOCK', icon: Package },
		{ label: 'LOW_STOCK', icon: AlertTriangle },
		{ label: 'OUT_OF_STOCK', icon: XCircle },
		{ label: 'ON_ORDER', icon: Truck },
		{ label: 'ARRIVED', icon: CheckCircle },
		{ label: 'EXPIRED', icon: Clock },
		{ label: 'RESERVED', icon: Bookmark },
	];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
			{summaryData.map((card) => {
				const Icon = card.icon;
				const totalQuantity = medications
					.filter((med) => med.status === card.label)
					.reduce((acc, med) => acc + med.quantity, 0);

				return (
					<Card
						key={card.label}
						className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 py-2">
							<Icon className="h-5 w-5 text-primary" />
							<CardTitle className="text-sm font-medium  text-muted-foreground">
								{card.label.replace('_', ' ')}
							</CardTitle>
							<p className="text-base font-bold text-foreground">
								{totalQuantity}
							</p>
						</CardHeader>
					</Card>
				);
			})}
		</div>
	);
};

export default MedsSummaryCards;
