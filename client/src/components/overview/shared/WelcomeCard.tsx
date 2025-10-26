import image from '../../../assets/bg2.jpg';
import { useAuth } from '@/context/AuthContext';

interface WelcomeCardProps {
	userRole: string;
}

const WelcomeCard = ({ userRole }: WelcomeCardProps) => {
	const { user } = useAuth();
	const date = new Date();
	const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
	const dateString = date.toLocaleDateString('en-US');
	const timeString = date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	});
	const weatherEmoji = '🌤️';

	return (
		<div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
			<img
				src={image}
				className="w-full h-64 rounded-2xl overflow-hidden shadow-md"
			/>

			<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
				{/* Top-Right*/}
				<div className="absolute top-4 left-8 text-[#93AECA] text-sm font-semibold flex items-center gap-2">
					<span>{dateString}</span>
					<span>{timeString}</span>
					<span>{weatherEmoji}</span>
				</div>

				{/* Bottom-Right*/}
				<div className="absolute top-16 left-8 text-[#C8D9E6] text-left">
					<h2 className="text-xl font-bold">{`Hello ${
						user?.name.split(' ')[0]
					}!`}</h2>
					<p className="text-sm italic">Have a nice {dayName} 😊</p>
				</div>
			</div>
		</div>
	);
};

export default WelcomeCard;
