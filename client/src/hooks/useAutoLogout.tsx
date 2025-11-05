import { useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { resetUser } from '@/store/slices/userSlice';

const AUTO_LOGOUT_MINUTES = 10; //10 minutes

export const useAutoLogout = () => {
	const { signOut } = useAuth();
	const navigate = useNavigate();
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const dispatch = useDispatch<AppDispatch>();

	const resetTimer = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			dispatch(resetUser());
			signOut();
			navigate('/login');
		}, AUTO_LOGOUT_MINUTES * 60 * 1000);
	};

	useEffect(() => {
		const events = [
			'mousemove',
			'mousedown',
			'keydown',
			'scroll',
			'touchstart',
		];

		events.forEach((event) => window.addEventListener(event, resetTimer));

		resetTimer();

		return () => {
			events.forEach((event) =>
				window.removeEventListener(event, resetTimer)
			);
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);
};
