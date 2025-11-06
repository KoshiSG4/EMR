export interface User {
	name: string;
	email: string;
	role: string;
	dateOfBirth: string;
	gender: string;
	phone: string;
	address: string;
	bloodType: string;
	mustChangePassword?: boolean;
	profileImage?: string;
	shift?: string;
	id?: string;
}
