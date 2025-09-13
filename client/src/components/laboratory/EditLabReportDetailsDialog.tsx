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
import { LabRequest, LabStatus } from '@/types/LabRequest';
import {
	enterLabResult,
	setSelectedLabRequest,
	updateLabStatus,
} from '@/store/slices/laboratorySlice';

interface EditLabReportDetailsDialogProps {
	open: boolean;
	onClose: () => void;
	selectedLabReport: LabRequest | null;
}

const EditLabReportDetailsDialog = ({
	open,
	onClose,
	selectedLabReport,
}: EditLabReportDetailsDialogProps) => {
	if (!selectedLabReport) return null;

	const [formData, setFormData] = useState<LabRequest | null>(null);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (selectedLabReport) {
			setFormData(selectedLabReport);
			dispatch(setSelectedLabRequest(selectedLabReport));
		}
	}, [selectedLabReport]);

	if (!formData) return null;

	const handleChange = (field: keyof LabRequest, value: string | number) => {
		setFormData((prev) => (prev ? { ...prev, [field]: value } : prev));
	};

	const handleSubmit = () => {
		if (!formData) return;

		dispatch(
			updateLabStatus({
				id: selectedLabReport.id,
				status: formData.status,
			})
		);
		if (formData.result)
			dispatch(
				enterLabResult({
					id: selectedLabReport.id,
					result: formData.result,
				})
			);
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
						Edit Lab Report – {selectedLabReport.testName}
					</DialogTitle>
					<DialogDescription>
						Update laboratory test details below
					</DialogDescription>
				</DialogHeader>

				{/* Form Fields */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					<div>
						<Label>Patient Name</Label>
						<Input
							value={formData.patientName}
							onChange={(e) =>
								handleChange('patientName', e.target.value)
							}
						/>
					</div>
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
						<Label>Test Name</Label>
						<Input
							value={formData.testName}
							onChange={(e) =>
								handleChange('testName', e.target.value)
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
						<Label>Requested By</Label>
						<Input
							value={formData.requestedBy}
							onChange={(e) =>
								handleChange('requestedBy', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Date</Label>
						<Input
							type="date"
							value={formData.date}
							onChange={(e) =>
								handleChange('date', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Status</Label>
						<Select
							value={formData.status}
							onValueChange={(value: LabStatus) =>
								handleChange('status', value)
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Pending">Pending</SelectItem>
								<SelectItem value="Sample Accepted">
									Sample Accepted
								</SelectItem>
								<SelectItem value="In Progress">
									In Progress
								</SelectItem>
								<SelectItem value="Completed">
									Completed
								</SelectItem>
								<SelectItem value="Validated">
									Validated
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="col-span-2">
						<Label>Result</Label>
						<Input
							value={formData.result || ''}
							onChange={(e) =>
								handleChange('result', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Normal Range</Label>
						<Input
							value={formData.normalRange}
							onChange={(e) =>
								handleChange('normalRange', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Interpretation</Label>
						<Input
							value={formData.interpretation}
							onChange={(e) =>
								handleChange('interpretation', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Validated By</Label>
						<Input
							value={formData.validatedBy || ''}
							onChange={(e) =>
								handleChange('validatedBy', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Validator ID</Label>
						<Input
							value={formData.validatedById || ''}
							onChange={(e) =>
								handleChange('validatedById', e.target.value)
							}
						/>
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
