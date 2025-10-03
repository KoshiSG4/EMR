import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ReferralRecord } from '@/types/referralRecord ';

interface ReferralsFormProps {
	onSubmit: (data: ReferralRecord) => void;
	patientId: string;
	referredBy: string;
}

const ReferralsForm = ({
	onSubmit,
	patientId,
	referredBy,
}: ReferralsFormProps) => {
	const [referral, setReferral] = useState({
		referralType: '',
		referredTo: '',
		department: '',
		reason: '',
		notes: '',
		status: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setReferral((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newReferral: ReferralRecord = {
			id: crypto.randomUUID(),
			date: new Date().toISOString(),
			referralType: referral.referralType,
			referredTo: referral.referredTo,
			department: referral.department,
			reason: referral.reason,
			notes: referral.notes,
			status: referral.status,
			referredBy,
		};
		setReferral({
			referralType: '',
			referredTo: '',
			department: '',
			reason: '',
			notes: '',
			status: '',
		});
		onSubmit(newReferral);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="referralType"
						type="text"
						placeholder="referralType"
						value={referral.referralType}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="referredTo"
						type="text"
						placeholder="Referred To"
						value={referral.referredTo}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="department"
						type="text"
						placeholder="Department"
						value={referral.department}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="reason"
						type="text"
						placeholder="Reason"
						value={referral.reason}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="notes"
						type="text"
						placeholder="Notes"
						value={referral.notes}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="status"
						type="text"
						placeholder="Status"
						value={referral.status}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
				</div>

				<div className="flex justify-end mt-6">
					<Button
						type="submit"
						onClick={handleSubmit}
						className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
						Save
					</Button>
				</div>
			</form>
		</>
	);
};

export default ReferralsForm;
