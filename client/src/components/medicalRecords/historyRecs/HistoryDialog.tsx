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
import { HistoryRecord } from '@/types/historyType';
import { useState } from 'react';

interface HistoryDialogProps {
	open: boolean;
	onClose: () => void;
	history: HistoryRecord | null;
}

const HistoryDetailsDialog = ({
	open,
	onClose,
	history,
}: HistoryDialogProps) => {
	if (!history) return null;

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="max-w-3xl p-6">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold">
						Full History Record
					</DialogTitle>
					<DialogDescription>
						Detailed information of the history record
					</DialogDescription>
				</DialogHeader>

				{/* Details Grid */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					{/* Past Medical History */}
					<div>
						<p className="font-medium text-gray-600">
							Chronic Conditions
						</p>
						<p>{history.chronicConditions || '—'}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">
							Past Illnesses
						</p>
						<p>{history.pastIllnesses || '—'}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Surgeries</p>
						<p>{history.surgeries || '—'}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">
							Hospitalizations
						</p>
						<p>{history.hospitalizations || '—'}</p>
					</div>

					{/* Family History */}
					<div>
						<p className="font-medium text-gray-600">
							Family History
						</p>
						<p>{history.familyHistory || '—'}</p>
					</div>

					{/* Social History */}
					<div>
						<p className="font-medium text-gray-600">Lifestyle</p>
						<p>{history.lifestyle || '—'}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Smoking</p>
						<p>
							{history.smokingStatus || '—'}{' '}
							{history.smokingNotes && (
								<span>({history.smokingNotes})</span>
							)}
						</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Alcohol</p>
						<p>
							{history.alcoholUse || '—'}{' '}
							{history.alcoholNotes && (
								<span>({history.alcoholNotes})</span>
							)}
						</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Drug Use</p>
						<p>
							{history.drugUse || '—'}{' '}
							{history.drugNotes && (
								<span>({history.drugNotes})</span>
							)}
						</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Diet</p>
						<p>
							{history.diet || '—'}{' '}
							{history.dietNotes && (
								<span>({history.dietNotes})</span>
							)}
						</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Occupation</p>
						<p>{history.occupation || '—'}</p>
					</div>

					{/* Allergies */}
					<div>
						<p className="font-medium text-gray-600">Allergies</p>
						<p>{history.allergies || '—'}</p>
					</div>

					{/* OB/GYN History */}
					<div>
						<p className="font-medium text-gray-600">
							Obstetric History
						</p>
						<p>{history.obstetricHistory || '—'}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">
							Menstrual History
						</p>
						<p>{history.menstrualHistroy || '—'}</p>
					</div>

					{/* Immunizations */}
					<div>
						<p className="font-medium text-gray-600">
							Immunizations
						</p>
						<p>{history.immunizations || '—'}</p>
					</div>

					{/* Meta Info */}
					<div>
						<p className="font-medium text-gray-600">Recorded By</p>
						<p>{history.recordedBy || '—'}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Created At</p>
						<p>{new Date(history.createdAt).toLocaleString()}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Updated At</p>
						<p>{new Date(history.updatedAt).toLocaleString()}</p>
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

export default HistoryDetailsDialog;
