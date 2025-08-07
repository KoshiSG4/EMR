export type Appointment = {
	id: string;
	patient: string;
	doctor: string;
	date: string;
	time: string;
	type: 'in-person' | 'virtual';
	status: 'upcoming' | 'past' | 'cancelled';
	notes?: string;
};

interface Props {
	appointments: Appointment[];
	variant: 'upcoming' | 'past' | 'cancelled' | 'all';
}

export const AppointmentTable = ({ appointments, variant }: Props) => (
	<div className="overflow-x-auto bg-white rounded-2xl shadow-md">
		<table className="min-w-full text-sm text-left">
			<thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wide">
				<tr>
					<th className="px-6 py-3">Patient</th>
					<th className="px-6 py-3">Doctor</th>
					<th className="px-6 py-3">Date</th>
					<th className="px-6 py-3">Time</th>
					<th className="px-6 py-3">Type</th>
					{variant === 'all' && <th className="px-6 py-3">Status</th>}
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200">
				{appointments.map((a, idx) => (
					<tr
						key={idx}
						className="hover:bg-gray-50 transition-colors duration-200">
						<td className="px-6 py-4 text-gray-800">{a.patient}</td>
						<td className="px-6 py-4 text-gray-800">{a.doctor}</td>
						<td className="px-6 py-4 text-gray-800">{a.date}</td>
						<td className="px-6 py-4 text-gray-800">{a.time}</td>
						<td className="px-6 py-4 text-gray-800 capitalize">
							{a.type}
						</td>
						{variant === 'all' && (
							<td className="px-6 py-4 text-gray-800 capitalize">
								<span
									className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
										a.status === 'cancelled'
											? 'bg-red-100 text-red-600'
											: a.status === 'past'
											? 'bg-yellow-100 text-yellow-600'
											: 'bg-green-100 text-green-600'
									}`}>
									{a.status}
								</span>
							</td>
						)}
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
