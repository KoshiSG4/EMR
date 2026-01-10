import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { refreshToken } from '@/api/refreshToken';
import { setLoading } from '@/store/slices/authSlice';

interface ProtectedRouteProps {
	children: React.ReactNode;
	allowedRoles?: string[];
}

export const ProtectedRoute = ({
	children,
	allowedRoles,
}: ProtectedRouteProps) => {
	const { loggedInUser } = useSelector((state: RootState) => state.user);
	const { isAuthenticated, loading } = useSelector(
		(state: RootState) => state.token
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				await refreshToken();
			} catch {
				console.log('No valid session');
			} finally {
				dispatch(setLoading(false));
			}
		};

		checkAuth();
	}, [setLoading]);

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-purple-50/30">
				<div className="text-purple-600 pr-3">Loading...</div>
				<LoaderIcon
					role="status"
					aria-label="Loading"
					className={cn('size-4 animate-spin')}
				/>
			</div>
		);
	}

	if (!isAuthenticated) {
		console.log('is not authenticated');
	}

	if (!loggedInUser) {
		return <Navigate to="/login" replace />;
	}

	if (allowedRoles && !allowedRoles.includes(loggedInUser.role)) {
		return <div>403 Forbidden</div>;
	}

	return <>{children}</>;
};
