import { useState, useMemo, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import image from '../../../assets/NoSchedules.png';

interface Schedule {
	date: string;
	time: string;
	title: string;
}

const dummySchedules: Schedule[] = [
	{
		date: '2025-10-27',
		time: '08:30 AM',
		title: 'Daily Briefing with Department Heads',
	},
	{
		date: '2025-10-27',
		time: '10:00 AM',
		title: 'Review Hospital Financial Reports',
	},
	{
		date: '2025-10-27',
		time: '02:00 PM',
		title: 'Meeting with IT Team on EMR Updates',
	},
	{
		date: '2025-10-28',
		time: '09:30 AM',
		title: 'Staff Training Evaluation',
	},
	{ date: '2025-10-28', time: '11:00 AM', title: 'Patient Feedback Review' },
	{ date: '2025-10-28', time: '03:00 PM', title: 'Budget Planning Session' },
	{ date: '2025-10-29', time: '09:00 AM', title: 'Compliance & Audit Check' },
	{
		date: '2025-10-29',
		time: '01:30 PM',
		title: 'Meeting with HR — Recruitment Discussion',
	},
	{ date: '2025-10-30', time: '10:00 AM', title: 'Hospital Policy Review' },
	{
		date: '2025-10-30',
		time: '02:30 PM',
		title: 'Infrastructure & Maintenance Inspection',
	},
	{
		date: '2025-10-31',
		time: '09:00 AM',
		title: 'Vendor & Supplier Coordination',
	},
	{
		date: '2025-10-31',
		time: '01:00 PM',
		title: 'Weekly Admin Wrap-Up Meeting',
	},
];

interface UserCalendarCardProps {
	userRole: string;
}

const UserCalendarCard = ({ userRole }: UserCalendarCardProps) => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const containerRef = useRef<HTMLDivElement>(null);
	const [showFade, setShowFade] = useState(false);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const checkScroll = () => {
			const isScrollable =
				container.scrollHeight > container.clientHeight &&
				container.scrollTop + container.clientHeight <
					container.scrollHeight - 1;
			setShowFade(isScrollable);
		};

		checkScroll();
		container.addEventListener('scroll', checkScroll);
		return () => container.removeEventListener('scroll', checkScroll);
	}, []);

	// Get start of week (Monday)
	const startOfWeek = useMemo(() => {
		const date = new Date(selectedDate);
		const day = date.getDay();
		const diff = day === 0 ? -6 : 1 - day;
		date.setDate(date.getDate() + diff);
		return date;
	}, [selectedDate]);

	// Generate 7 days of week
	const weekDays = [...Array(7)].map((_, i) => {
		const d = new Date(startOfWeek);
		d.setDate(startOfWeek.getDate() + i);
		return d;
	});

	// Get schedules for selected day
	const filteredSchedules = dummySchedules.filter(
		(s) => s.date === selectedDate.toISOString().split('T')[0]
	);

	const today = new Date().toDateString();
	const monthName = selectedDate.toLocaleString('default', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<div className="bg-white relative shadow-md  rounded-2xl max-w-md w-full h-[450px] border border-gray-200 p-4">
			{/* Header */}
			<div className="flex justify-between items-center p-4 mb-4 bg-[#274442] rounded-md">
				<h2 className="text-base font-semibold  text-[#D6F3F6]">
					My Calendar
				</h2>

				<div className="flex justify-end">
					<DatePicker
						selected={selectedDate}
						onChange={(date: Date | null) =>
							date && setSelectedDate(date)
						}
						popperPlacement="bottom-end"
						customInput={
							<button className="flex items-center gap-2 text-[#c5ab19] hover:text-[#D6F3F6] transition-colors">
								<FaCalendarAlt />
							</button>
						}
					/>
				</div>
			</div>

			{/* Month */}
			<div className="text-center text-gray-700 font-medium mb-3">
				{monthName}
			</div>

			{/* Week Row */}
			<div className="grid grid-cols-7 gap-2 text-center mb-4 ">
				{weekDays.map((day, i) => {
					const isToday = day.toDateString() === today;
					const isSelected =
						day.toDateString() === selectedDate.toDateString();

					return (
						<button
							key={i}
							onClick={() => setSelectedDate(day)}
							className={`p-2 rounded-lg text-xs ${
								isSelected
									? 'bg-[#274442] text-white'
									: isToday
									? 'bg-[#D6F3F6] text-[#274442] font-semibold'
									: 'text-gray-600 hover:bg-gray-100'
							}`}>
							<div className="font-semibold pb-2">
								{day.toLocaleDateString('en-US', {
									weekday: 'short',
								})}
							</div>
							<div>{day.getDate()}</div>
						</button>
					);
				})}
			</div>

			{/* Schedule List Title */}
			<h3 className="font-semibold text-sm text-[#508991] mb-2">
				{selectedDate.toLocaleDateString('en-US', {
					weekday: 'long',
					day: 'numeric',
					month: 'short',
				})}
			</h3>

			{/* Schedules */}
			<div
				ref={containerRef}
				className="space-y-0.5  max-h-52 relative overflow-y-auto "
				style={{ scrollbarWidth: 'none' }}>
				{filteredSchedules.length > 0 ? (
					filteredSchedules.map((schedule, idx) => (
						<div
							key={idx}
							className="p-3 rounded-lg bg-[#D4DEE1] shadow-sm">
							<span className="text-sm  text-[#488DB4] pr-2">
								{schedule.time}
							</span>
							<span className="text-gray-600 text-sm">
								{schedule.title}
							</span>
						</div>
					))
				) : (
					<div className="flex justify-center items-center h-52">
						<img
							src={image}
							alt="NoSchedule"
							className="w-32 h-32 rounded-full object-cover shadow-md"
						/>
					</div>
				)}
			</div>
			{showFade && (
				<div className="pointer-events-none absolute bottom-0 left-2 right-2 h-14 bg-gradient-to-t from-white to-transparent" />
			)}
		</div>
	);
};

export default UserCalendarCard;
