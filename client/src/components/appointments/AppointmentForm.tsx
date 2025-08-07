import { useState } from 'react';

export const AppointmentForm = () => {
	const [form, setForm] = useState({
		patient: '',
		doctor: '',
		date: '',
		time: '',
		type: 'in-person',
		notes: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Creating Appointment:', form);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6 bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto">
			<h2 className="text-xl font-semibold text-gray-800 mb-4">
				Create Appointment
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Patient
					</label>
					<input
						type="text"
						name="patient"
						value={form.patient}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Enter patient name"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Doctor
					</label>
					<input
						type="text"
						name="doctor"
						value={form.doctor}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Enter doctor name"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Date
					</label>
					<input
						type="date"
						name="date"
						value={form.date}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Time
					</label>
					<input
						type="time"
						name="time"
						value={form.time}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Type
					</label>
					<select
						name="type"
						value={form.type}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
						<option value="in-person">In-person</option>
						<option value="virtual">Virtual</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Notes
					</label>
					<input
						type="text"
						name="notes"
						value={form.notes}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Optional notes"
					/>
				</div>
			</div>

			<div className="pt-4">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200">
					Create Appointment
				</button>
			</div>
		</form>
	);
};
