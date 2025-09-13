// columnDef.tsx
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Activity,
	CheckCircle,
	ClipboardCheck,
	Eye,
	FileText,
	MoreHorizontal,
	ShieldCheck,
} from 'lucide-react';
import DataTable from '../common/DataTable';
import { useState } from 'react';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import MedicationDetailsDialog from './LabReportDetailDialog';
import LabReportDetailDialog from './LabReportDetailDialog';
import EditLabReportDetailsDialog from './EditLabReportDetailsDialog';
import { LabRequest } from '@/types/LabRequest';
import { updateLabStatus } from '@/store/slices/laboratorySlice';

export const dummyTestRequestsData: LabRequest[] = [
	{
		id: '1',
		patientId: 'P001',
		patientName: 'John Doe',
		testType: 'Blood Test',
		testName: 'Complete Blood Count (CBC)',
		testCode: 'CBC001',
		department: 'Hematology',
		requestedBy: 'Dr. Smith',
		date: '2025-09-10',
		status: 'Pending',
		result: '',
		normalRange: '4.5 - 11.0 x10^9/L',
		interpretation: '',
		validatedBy: '',
		validatedById: '',
	},
	{
		id: '2',
		patientId: 'P002',
		patientName: 'Jane Smith',
		testType: 'Urine Test',
		testName: 'Urinalysis',
		testCode: 'UA002',
		department: 'Pathology',
		requestedBy: 'Dr. Brown',
		date: '2025-09-09',
		status: 'In Progress',
		result: '',
		normalRange: 'Normal',
		interpretation: '',
		validatedBy: '',
		validatedById: '',
	},
	{
		id: '3',
		patientId: 'P003',
		patientName: 'Michael Johnson',
		testType: 'Imaging',
		testName: 'X-Ray Chest',
		testCode: 'XR003',
		department: 'Radiology',
		requestedBy: 'Dr. Wilson',
		date: '2025-09-08',
		status: 'Completed',
		result: 'No abnormalities detected',
		normalRange: 'Clear lungs',
		interpretation: 'Normal',
		validatedBy: 'Dr. Adams',
		validatedById: 'D001',
	},
];

export const testRequestColumns = (
	onAction: (id: string, newStatus: LabRequest['status']) => void
): ColumnDef<LabRequest>[] => [
	{
		accessorKey: 'id',
		header: 'Request ID',
	},
	{
		accessorKey: 'patientName',
		header: 'Patient',
	},
	{
		accessorKey: 'testType',
		header: 'Test Type',
	},
	{
		accessorKey: 'requestedBy',
		header: 'Requested By',
	},
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status = row.original.status;
			let style = 'bg-gray-100 text-gray-800';
			if (status === 'Pending') style = 'bg-yellow-100 text-yellow-800';
			if (status === 'Sample Accepted')
				style = 'bg-blue-100 text-blue-800';
			if (status === 'In Progress') style = 'bg-blue-100 text-blue-800';
			if (status === 'Completed') style = 'bg-green-100 text-green-800';
			if (status === 'Validated') style = 'bg-purple-100 text-purple-800';

			return <Badge className={style}>{status}</Badge>;
		},
	},
	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => {
			const request = row.original;

			switch (request.status) {
				case 'Pending':
					return (
						<Button
							size="sm"
							variant="outline"
							className="flex items-center gap-1"
							onClick={() =>
								onAction(request.id, 'Sample Accepted')
							}>
							<ClipboardCheck className="h-4 w-4" />
							Accept Sample
						</Button>
					);

				case 'Sample Accepted':
					return (
						<Button
							size="sm"
							variant="outline"
							className="flex items-center gap-1"
							onClick={() => onAction(request.id, 'In Progress')}>
							<Activity className="h-4 w-4" />
							In Progress
						</Button>
					);

				case 'In Progress':
					return (
						<Button
							size="sm"
							variant="outline"
							className="flex items-center gap-1"
							onClick={() => onAction(request.id, 'Completed')}>
							<CheckCircle className="h-4 w-4" />
							Completed
						</Button>
					);

				case 'Completed':
					return (
						<Button
							size="sm"
							variant="outline"
							className="flex items-center gap-1"
							onClick={() => onAction(request.id, 'Validated')}>
							<ShieldCheck className="h-4 w-4" />
							Validated
						</Button>
					);

				case 'Validated':
					return (
						<Button
							size="sm"
							variant="outline"
							className="flex items-center gap-1">
							<Eye className="h-4 w-4" />
							View
						</Button>
					);

				default:
					return null;
			}
		},
	},
	{
		id: 'menu',
		header: 'Menu',
		cell: ({ row }) => {
			const labReport = row.original;
			const dispatch = useDispatch<AppDispatch>();
			const [isDialogOpen, setIsDialogOpen] = useState(true);

			const handleDialogClose = () => {
				setIsDialogOpen(false);
			};

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="z-50 bg-white shadow-2xl  shadow-black/50 border border-gray-200 rounded-xl p-2">
						<ul>
							<li>
								<LabReportDetailDialog
									open={true}
									onClose={close}
									labReport={labReport}
								/>
							</li>
							<li>
								<EditLabReportDetailsDialog
									open={isDialogOpen}
									onClose={handleDialogClose}
									selectedLabReport={labReport}
								/>
							</li>
						</ul>

						<DropdownMenuItem className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const ViewRequests = () => {
	const [loading, setIsLoading] = useState(false);
	const [requests, setRequests] = useState<LabRequest[]>(
		dummyTestRequestsData
	);
	const dispatch = useDispatch<AppDispatch>();

	const handleAction = (id: string, newStatus: LabRequest['status']) => {
		setRequests((prev) =>
			prev.map((req) =>
				req.id === id ? { ...req, status: newStatus } : req
			)
		);
	};

	return (
		<div className="p-3 pt-1 space-y-6 relative">
			<div className="flex-1 transition-all duration-300">
				<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
					<h1 className="text-lg mb-3 font-semibold text-gray-800">
						Laboratory Test Requests
					</h1>
					<DataTable
						columns={testRequestColumns(handleAction)}
						data={requests}
						loading={loading}
						filters={[
							{
								columnId: 'patientName',
								placeholder: 'Filter by Patient Name...',
								className: 'max-w-sm mr-4',
							},
							{
								columnId: 'testType',
								placeholder: 'Filter by Test Type...',
								className: 'max-w-sm',
							},
							{
								columnId: 'status',
								type: 'select',
								options: [
									'Pending',
									'Sample Accepted',
									'In Progress',
									'Completed',
									'Validated',
								],
								className: 'max-w-sm',
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default ViewRequests;
