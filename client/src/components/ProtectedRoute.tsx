import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProtectedRouteProps {
	children: React.ReactNode;
	allowedRoles?: string[];
}

export const ProtectedRoute = ({
	children,
	allowedRoles,
}: ProtectedRouteProps) => {
	const { loading, loggedInUser } = useSelector(
		(state: RootState) => state.user
	);

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

	if (!loggedInUser) {
		return <Navigate to="/login" replace />;
	}

	if (allowedRoles && !allowedRoles.includes(loggedInUser.role)) {
		return <div>403 Forbidden</div>;
	}

	return <>{children}</>;
};
