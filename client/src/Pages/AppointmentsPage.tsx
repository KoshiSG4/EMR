import {
	Appointment,
	AppointmentTable,
} from '../components/appointments/AppointmentTable';
import { useAppointments } from '../components/appointments/Appointments';
import { AppointmentForm } from '../components/appointments/AppointmentForm';

interface AppointmentPageProps {
	activeTab: string;
}

const AppointmentsPage = ({ activeTab }: AppointmentPageProps) => {
	const { upcoming, past, cancelled } = useAppointments();

	const allAppointments: Appointment[] = [
		...upcoming.map((a) => ({ ...a, variant: 'Upcoming' as const })),
		...past.map((a) => ({ ...a, variant: 'Past' as const })),
		...cancelled.map((a) => ({ ...a, variant: 'Cancelled' as const })),
	];

	const renderTable = (
		appointments: Appointment[],
		variant: 'upcoming' | 'past' | 'cancelled'
	) => {
		return appointments.length ? (
			<AppointmentTable appointments={appointments} variant={variant} />
		) : (
			<div className="text-center text-gray-500 p-6 italic">
				No Appointments to Show
			</div>
		);
	};
	console.log(activeTab);

	const filteredAppointments =
		activeTab === 'create'
			? []
			: allAppointments.filter((app) => app.status === activeTab);

	return (
		// <div className="p-4">
		// 	{activeTab === 'upcoming' && renderTable(upcoming, 'upcoming')}
		// 	{activeTab === 'past' && renderTable(past, 'past')}
		// 	{activeTab === 'cancelled' && renderTable(cancelled, 'cancelled')}
		// 	{activeTab === 'create' && <AppointmentForm />}
		// </div>
		<div className="p-4">
			{activeTab === 'create' ? (
				<AppointmentForm />
			) : activeTab === '' ? (
				<AppointmentTable
					appointments={[...upcoming, ...past, ...cancelled]}
					variant="all"
				/>
			) : filteredAppointments.length ? (
				<AppointmentTable
					appointments={filteredAppointments}
					variant={activeTab as any}
				/>
			) : (
				<div className="text-center text-gray-500 p-6 italic">
					No Appointments to show
				</div>
			)}
		</div>
	);
};

export default AppointmentsPage;
