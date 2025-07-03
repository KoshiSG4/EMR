import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export class AuthError extends Error {
	constructor(message, statuCode = 401) {
		super(message);
		this.name = 'AuthError';
		this.statusCode = statuCode;
	}
}

export const getLoggedInUser = async (req, res) => {
	const email = req.kauth?.grant?.access_token?.content?.email;

	if (!email) {
		throw new AuthError('Email not found');
		return res.status(404).json({ message: 'User not found' });
	}

	const user = await prisma.user.findUnique({ where: { email } });

	if (!user) {
		throw new AuthError('User not found');
	}

	return user;
};
