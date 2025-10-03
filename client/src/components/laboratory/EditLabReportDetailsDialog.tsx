import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { LabRequest } from '@/types/labRequest';
import {
	setSelectedLabRequest,
	updateLabTestRecord,
} from '@/store/slices/laboratorySlice';
import { getUserInfoFromToken } from '@/utils/jwtUtils';

interface EditLabReportDetailsDialogProps {
	open: boolean;
	onClose: () => void;
	selectedLabReport: LabRequest | null;
	onSave: (updated: LabRequest) => void;
}

const EditLabReportDetailsDialog = ({
	open,
	onClose,
	selectedLabReport,
	onSave,
}: EditLabReportDetailsDialogProps) => {
	if (!selectedLabReport) return null;

	const [formData, setFormData] = useState<LabRequest | null>(null);

	const dispatch = useDispatch<AppDispatch>();
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	useEffect(() => {
		if (selectedLabReport) {
			setFormData(selectedLabReport);
			dispatch(setSelectedLabRequest(selectedLabReport));
		}
	}, [selectedLabReport]);

	if (!formData) return null;

	const handleChange = (
		field: keyof LabRequest,
		value: string | number | boolean
	) => {
		setFormData((prev) => (prev ? { ...prev, [field]: value } : prev));
	};

	const handleStatusChange = (value: string) => {
		const now = new Date().toISOString();
		let updates: Partial<LabRequest> = { status: value };

		if (value === 'ACCEPTED') {
			updates.acceptedAt = now;
		}
		if (value === 'VALIDATED') {
			updates.validatedAt = now;
			updates.validatedBy = userName;
		}
		if (value === 'RELEASED') {
			updates.releasedAt = now;
		}
		if (value === 'Cancelled') {
			updates.cancelledAt = now;
			updates.cancelledBy = userName;
		}

		setFormData((prev) => (prev ? { ...prev, ...updates } : prev));
	};

	const handleSubmit = () => {
		if (!formData) return;
		dispatch(
			updateLabTestRecord({
				labRequestId: formData.id,
				labRequest: formData,
			})
		);
		onSave(formData);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="px-3 py-2 w-full justify-start rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-3xl p-6">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold">
						Edit Lab Request – {formData.testType}
					</DialogTitle>
					<DialogDescription>
						Update laboratory test details below
					</DialogDescription>
				</DialogHeader>

				{/* Form Fields */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					<div>
						<Label>Test Type</Label>
						<Input
							value={formData.testType}
							onChange={(e) =>
								handleChange('testType', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Test Code</Label>
						<Input
							value={formData.testCode || ''}
							onChange={(e) =>
								handleChange('testCode', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Department</Label>
						<Input
							value={formData.department}
							onChange={(e) =>
								handleChange('department', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Priority</Label>
						<Select
							value={formData.priority || 'ROUTINE'}
							onValueChange={(value) =>
								handleChange('priority', value)
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select priority" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ROUTINE">Routine</SelectItem>
								<SelectItem value="URGENT">Urgent</SelectItem>
								<SelectItem value="STAT">STAT</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<Label>Status</Label>
						<Select
							value={formData.status}
							onValueChange={(value) =>
								handleStatusChange(value)
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="PENDING">Pending</SelectItem>
								<SelectItem value="ACCEPTED">
									Sample Accepted
								</SelectItem>
								<SelectItem value="IN_PROGRESS">
									In Progress
								</SelectItem>
								<SelectItem value="RESULT_ENTERED">
									Completed
								</SelectItem>
								<SelectItem value="VALIDATED">
									Validated
								</SelectItem>
								<SelectItem value="CANCELLED">
									Cancelled
								</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<Label>Specimen Type</Label>
						<Select
							value={formData.specimenType || ''}
							onValueChange={(value) =>
								handleChange('specimenType', value)
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select specimen type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Blood">Blood</SelectItem>
								<SelectItem value="Urine">Urine</SelectItem>
								<SelectItem value="Saliva">Saliva</SelectItem>
								<SelectItem value="Tissue">Tissue</SelectItem>
								<SelectItem value="Sputum">Sputum</SelectItem>
								<SelectItem value="Stool">Stool</SelectItem>
								<SelectItem value="Other">Other</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="col-span-2">
						<Label>Order Notes</Label>
						<Input
							value={formData.orderNotes || ''}
							onChange={(e) =>
								handleChange('orderNotes', e.target.value)
							}
						/>
					</div>

					<div>
						<Label>Billing Code</Label>
						<Input
							value={formData.billingCode || ''}
							onChange={(e) =>
								handleChange('billingCode', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Cost</Label>
						<Input
							type="number"
							value={formData.cost || ''}
							onChange={(e) =>
								handleChange('cost', Number(e.target.value))
							}
						/>
					</div>
					<div>
						<Label>Insurance Covered</Label>
						<Select
							value={
								formData.coveredByInsurance ? 'true' : 'false'
							}
							onValueChange={(value) =>
								handleChange(
									'coveredByInsurance',
									value === 'true'
								)
							}>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="true">Yes</SelectItem>
								<SelectItem value="false">No</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* Footer */}
				<DialogFooter className="mt-6 flex justify-between">
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button onClick={handleSubmit}>Save Changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EditLabReportDetailsDialog;
