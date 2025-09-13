import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MedicationInventory } from '@/types/medicationInventoryType';

interface MedicationDetailsDialogProps {
	open: boolean;
	onClose: () => void;
	medication: MedicationInventory | null;
}

const MedicationDetailsDialog = ({
	open,
	onClose,
	medication,
}: MedicationDetailsDialogProps) => {
	if (!medication) return null;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
					View More Info
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-3xl p-6">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold">
						{medication.name}{' '}
						<span className="text-gray-500 text-sm">
							({medication.form})
						</span>
					</DialogTitle>
					<DialogDescription>
						Detailed information for this medication
					</DialogDescription>
				</DialogHeader>

				{/* Details Grid */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					<div>
						<p className="font-medium text-gray-600">Strength</p>
						<p>{medication.strength}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">
							Batch Number
						</p>
						<p>{medication.batchNumber}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Quantity</p>
						<p>{medication.quantity}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">
							Reorder Level
						</p>
						<p>{medication.reorderLevel}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Status</p>
						<Badge
							variant={
								medication.status === 'IN_STOCK'
									? 'default'
									: medication.status === 'LOW_STOCK'
									? 'secondary'
									: medication.status === 'OUT_OF_STOCK'
									? 'destructive'
									: 'outline'
							}>
							{medication.status.replaceAll('_', ' ')}
						</Badge>
					</div>
					{medication.supplier && (
						<div>
							<p className="font-medium text-gray-600">
								Supplier
							</p>
							<p>{medication.supplier}</p>
						</div>
					)}
					{medication.orderDate && (
						<div>
							<p className="font-medium text-gray-600">
								Order Date
							</p>
							<p>{medication.orderDate}</p>
						</div>
					)}
					{medication.arrivalDate && (
						<div>
							<p className="font-medium text-gray-600">
								Arrival Date
							</p>
							<p>{medication.arrivalDate}</p>
						</div>
					)}
					{medication.expiryDate && (
						<div>
							<p className="font-medium text-gray-600">
								Expiry Date
							</p>
							<p>{medication.expiryDate}</p>
						</div>
					)}
					{medication.reservedFor && (
						<div>
							<p className="font-medium text-gray-600">
								Reserved For
							</p>
							<p>{medication.reservedFor}</p>
						</div>
					)}
					<div>
						<p className="font-medium text-gray-600">Created At</p>
						<p>{new Date(medication.createdAt).toLocaleString()}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Updated At</p>
						<p>{new Date(medication.updatedAt).toLocaleString()}</p>
					</div>
				</div>

				<DialogFooter className="mt-6">
					<DialogClose asChild>
						<Button variant="outline">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default MedicationDetailsDialog;
