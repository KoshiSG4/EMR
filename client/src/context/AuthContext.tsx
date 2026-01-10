import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '@/api/axiosInstance';
import { User } from '@/types/userTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { resetUser, setLoggedInUser } from '@/store/slices/userSlice';
import { LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import refreshClient, { refreshToken } from '@/api/refreshToken';
import { setLoading } from '@/store/slices/authSlice';
import { Navigate } from 'react-router-dom';

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<User>;
	changePassword: (email: string, password: string) => Promise<void>;
	signUp: (email: string, password: string, name?: string) => Promise<void>;
	signOut: () => Promise<void>;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const userLogged = useSelector(
		(state: RootState) => state.user.loggedInUser
	);
	const { isAuthenticated, loading } = useSelector(
		(state: RootState) => state.token
	);
	const dispatch = useDispatch<AppDispatch>();

	const login = async (email: string, password: string) => {
		try {
			const response = await api.post(
				'/auth/login',
				{ email, password },
				{ withCredentials: true }
			);
			dispatch(setLoggedInUser(response.data.user));

			return response.data.user;
		} catch (error: any) {
			const errorMsg = error.response?.data?.message || 'Login failed';
			console.log(errorMsg);
			throw new Error(errorMsg);
		} finally {
			setIsLoading(false);
		}
	};
	const changePassword = async (email: string, password: string) => {
		try {
			const response = await api.post(
				'/auth/change-password',
				{ email, password },
				{ withCredentials: true }
			);
		} catch (error: any) {
			const errorMsg =
				error.response?.data?.message || 'Password Change failed';
			console.log(errorMsg);
			throw new Error(errorMsg);
		} finally {
			setIsLoading(false);
		}
	};

	const signUp = async (email: string, password: string, name?: string) => {
		try {
			const response = await api.post(
				'/auth/signup',
				{
					email,
					password,
					name,
				},
				{ withCredentials: true }
			);
			dispatch(setLoggedInUser(response.data));
		} catch (error: any) {
			const errorMsg = error.response?.data?.message || 'Signup failed';
			throw new Error(errorMsg);
		} finally {
			setIsLoading(false);
		}
	};

	const signOut = async () => {
		dispatch(resetUser());
		dispatch({ type: 'auth/logout' });
		const response = await api.post('/auth/logout', {
			withCredentials: true,
		});
	};

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

	return (
		<AuthContext.Provider
			value={{
				user: userLogged,
				login,
				changePassword,
				signUp,
				signOut,
				isLoading,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
