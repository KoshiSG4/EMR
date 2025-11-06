import express from 'express';
import { PrismaClient, Role } from '../generated/prisma/client.js';
import { getLoggedInUser } from '../utils/getLoggedInUser.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

function generateTempPassword() {
	const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!';
	return Array.from(
		{ length: 10 },
		() => chars[Math.floor(Math.random() * chars.length)]
	).join('');
}

//Create User Profile (only if user is an ADMIN)
export const createUser = async (req, res) => {
	try {
		const user = req.user;

		if (user.role !== 'ADMIN') {
			return res
				.status(404)
				.json({ message: 'Forbidden: Only admins can create users' });
		}

		const {
			name,
			email,
			role,
			dateOfBirth,
			gender,
			phone,
			address,
			bloodType,
			shift,
		} = req.body.user;

		//Check if user exist in DB
		const existingUser = await prisma.user.findUnique({
			where: { email: email },
		});

		if (existingUser) {
			return res.status(400).json({ message: 'Email already in use' });
		}

		const tempPassword = generateTempPassword();
		const hashedPassword = await bcrypt.hash(tempPassword, 10);

		//sync to prisma db
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				role,
				dateOfBirth,
				gender,
				phone,
				address,
				bloodType,
				shift,
				passwordHash: hashedPassword,
				mustChangePassword: true,
			},
		});

		res.status(201).json({
			message: 'User profile created successfully',
			user: {
				id: newUser.id,
				name: newUser.name,
				email: newUser.email,
				role: newUser.role,
				tempPassword,
				mustChangePassword: true,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Failed to create user profile',
			error: error.message,
		});
	}
};
