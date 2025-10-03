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
import { LabRequest } from '@/types/labRequest';

interface LabReportDetailDialogProps {
	open: boolean;
	onClose: () => void;
	labReport: LabRequest | null;
}

const LabReportDetailDialog = ({
	open,
	onClose,
	labReport,
}: LabReportDetailDialogProps) => {
	if (!labReport) return null;

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
						{labReport.testType}
					</DialogTitle>
					<DialogDescription>
						Detailed information for this lab request
					</DialogDescription>
				</DialogHeader>

				{/* Details Grid */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					{/* Patient */}
					<div>
						<p className="font-medium text-gray-600">Patient</p>
						<p>{labReport.patient?.fullName || 'N/A'}</p>
					</div>

					{/* Department */}
					<div>
						<p className="font-medium text-gray-600">Department</p>
						<p>{labReport.department}</p>
					</div>

					{/* Test Code */}
					{labReport.testCode && (
						<div>
							<p className="font-medium text-gray-600">
								Test Code
							</p>
							<p>{labReport.testCode}</p>
						</div>
					)}

					{/* Requested By (Doctor) */}
					<div>
						<p className="font-medium text-gray-600">
							Requested By
						</p>
						<p>{labReport.doctorName || 'N/A'}</p>
					</div>

					{/* Requested At */}
					<div>
						<p className="font-medium text-gray-600">
							Requested At
						</p>
						<p>
							{new Date(labReport.requestedAt).toLocaleString()}
						</p>
					</div>

					{/* Status */}
					<div>
						<p className="font-medium text-gray-600">Status</p>
						<Badge
							variant={
								labReport.status === 'PENDING'
									? 'secondary'
									: labReport.status === 'Sample Accepted'
									? 'outline'
									: labReport.status === 'In Progress'
									? 'default'
									: labReport.status === 'Completed'
									? 'default'
									: 'success'
							}>
							{labReport.status}
						</Badge>
					</div>

					{/* Specimen Info */}
					{labReport.specimenType && (
						<div>
							<p className="font-medium text-gray-600">
								Specimen Type
							</p>
							<p>{labReport.specimenType}</p>
						</div>
					)}
					{labReport.specimenId && (
						<div>
							<p className="font-medium text-gray-600">
								Specimen ID
							</p>
							<p>{labReport.specimenId}</p>
						</div>
					)}
					{labReport.specimenCollectedAt && (
						<div>
							<p className="font-medium text-gray-600">
								Collected At
							</p>
							<p>
								{new Date(
									labReport.specimenCollectedAt
								).toLocaleString()}
							</p>
						</div>
					)}

					{/* Results */}
					{labReport.results?.length
						? labReport.results.map((res, idx) => (
								<div key={idx} className="col-span-2">
									<p className="font-medium text-gray-600">
										Result – {res.parameter}
									</p>
									<p>
										{res.value} {res.unit || ''} (
										{res.referenceRange || ''}) –{' '}
										{res.interpretation || ''}
									</p>
								</div>
						  ))
						: null}

					{/* Validated By */}
					{labReport.validatedBy && (
						<div>
							<p className="font-medium text-gray-600">
								Validated By
							</p>
							<p>{labReport.validatedBy}</p>
						</div>
					)}

					{/* Billing / Insurance */}
					{labReport.billingCode && (
						<div>
							<p className="font-medium text-gray-600">
								Billing Code
							</p>
							<p>{labReport.billingCode}</p>
						</div>
					)}
					<div>
						<p className="font-medium text-gray-600">
							Covered by Insurance
						</p>
						<p>{labReport.coveredByInsurance ? 'Yes' : 'No'}</p>
					</div>

					{/* Notes */}
					{labReport.orderNotes && (
						<div className="col-span-2">
							<p className="font-medium text-gray-600">
								Order Notes
							</p>
							<p>{labReport.orderNotes}</p>
						</div>
					)}
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

export default LabReportDetailDialog;
