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
import { LabRequest } from '@/types/LabRequest';

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
						{labReport.testName}{' '}
						<span className="text-gray-500 text-sm">
							({labReport.testType})
						</span>
					</DialogTitle>
					<DialogDescription>
						Detailed information for this lab request
					</DialogDescription>
				</DialogHeader>

				{/* Details Grid */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					<div>
						<p className="font-medium text-gray-600">Patient</p>
						<p>{labReport.patientName}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Department</p>
						<p>{labReport.department}</p>
					</div>
					{labReport.testCode && (
						<div>
							<p className="font-medium text-gray-600">
								Test Code
							</p>
							<p>{labReport.testCode}</p>
						</div>
					)}
					<div>
						<p className="font-medium text-gray-600">
							Requested By
						</p>
						<p>{labReport.requestedBy}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Date</p>
						<p>{labReport.date}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">Status</p>
						<Badge
							variant={
								labReport.status === 'Pending'
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
					{labReport.result && (
						<div>
							<p className="font-medium text-gray-600">Result</p>
							<p>{labReport.result}</p>
						</div>
					)}
					<div>
						<p className="font-medium text-gray-600">
							Normal Range
						</p>
						<p>{labReport.normalRange}</p>
					</div>
					<div>
						<p className="font-medium text-gray-600">
							Interpretation
						</p>
						<p>{labReport.interpretation}</p>
					</div>
					{labReport.validatedBy && (
						<div>
							<p className="font-medium text-gray-600">
								Validated By
							</p>
							<p>{labReport.validatedBy}</p>
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
