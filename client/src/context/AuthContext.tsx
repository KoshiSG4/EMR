import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '@/api/axiosInstance';
import { email, set } from 'zod';
import { User } from '@/types/userTypes';

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<void>;
	signUp: (email: string, password: string, name?: string) => Promise<void>;
	signOut: () => Promise<void>;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		checkAuth();
	}, []);

	const checkAuth = async () => {
		try {
			const response = await api.get('/auth/me', {
				withCredentials: true,
			});
			const data = await response.data;
			console.log(data);
			setUser(data);
		} catch (error) {
			console.error('Failed to check auth status:', error);
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	const login = async (email: string, password: string) => {
		try {
			const response = await api.post(
				'/auth/login',
				{ email, password },
				{ withCredentials: true }
			);
			console.log(response);

			setUser(response.data.user);
		} catch (error: any) {
			const errorMsg = error.response?.data?.message || 'Login failed';
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
			setUser(response.data.user);
		} catch (error: any) {
			const errorMsg = error.response?.data?.message || 'Signup failed';
			throw new Error(errorMsg);
		} finally {
			setIsLoading(false);
		}
	};

	const signOut = async () => {
		const response = await api.post('/auth/logout', {
			withCredentials: true,
		});
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, login, signUp, signOut, isLoading }}>
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
