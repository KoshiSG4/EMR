import express from 'express';
import {
	kcAdminClient,
	authenticateKcAdmin,
} from '../keycloak/kcAdminClient.js';
import { PrismaClient, Role } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

//Create Admin Profile (only if user is a SUPER ADMIN)
export const createAdmin = async (req, res) => {
	try {
		const user = await getLoggedInUser(req);

		if (user.role !== 'ADMIN') {
			return res
				.status(404)
				.json({ message: 'Forbidden: Not an admin user' });
		}

		const { name, email, password, permissions } = req.body;

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return res.status(400).json({ message: 'Email already in use' });
		}

		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				password,
				role: 'ADMIN',
				admin: {
					create: {
						permissions,
					},
				},
			},
		});

		res.status(201).json({
			message: 'Admin profile created successfully',
			admin: newUser,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}
		console.error(error);
		res.status(500).json({
			message: 'Failed to create admin profile',
			error: error.message,
		});
	}
};

// Get all admins (only ADMINs)
export const getAllAdmins = async (req, res) => {
	try {
		const user = await getLoggedInUser(req);

		if (user.role !== 'ADMIN') {
			return res
				.status(404)
				.json({ message: 'Forbidden: Not an admin user' });
		}

		const admins = await prisma.admin.findMany({
			include: {
				user: true,
			},
		});

		res.status(200).json(admins);
	} catch (error) {
		if (error instanceof AuthError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

// Get Admin by ID (ADMIN only)
export const getAdminById = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await getLoggedInUser(req);

		if (user.role !== 'ADMIN') {
			return res
				.status(404)
				.json({ message: 'Forbidden: Not an admin user' });
		}

		const admin = await prisma.findUnique({
			where: { id: parseInt(id) },
			include: {
				user: true,
			},
		});

		if (!admin) return res.status(404).json({ message: 'Admin not found' });

		res.status(200).json(admin);
	} catch (error) {
		if (error instanceof AuthError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

// Get logged-in admin’s own profile
export const getOwnAdminProfile = async (req, res) => {
	try {
		const user = await getLoggedInUser(req);
		if (user.role !== 'ADMIN') {
			return res
				.status(403)
				.json({ message: 'Forbidden: Not an admin user' });
		}

		const admin = await prisma.findUnique({
			where: { userId: req.user.userId },
			include: {
				user: {
					select: {
						name: true,
						email: true,
						role: true,
						createdAt: true,
					},
				},
			},
		});

		if (!admin)
			return res.status(404).json({ message: 'Admin profile not found' });

		res.status(200).json(admin);
	} catch (error) {
		if (error instanceof AuthError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

// Update admin permissions
export const updateAdmin = async (req, res) => {
	const { id } = req.params;
	const { permissions } = req.body;
	try {
		const user = await getLoggedInUser(req);
		if (user.role !== 'ADMIN') {
			return res
				.status(403)
				.json({ message: 'Forbidden: Not an admin user' });
		}

		const admin = await prisma.admin.update({
			where: { id: parseInt(id) },
			data: { permissions },
			include: { user: true },
		});
		res.status(200).json(admin);
	} catch (error) {
		if (error instanceof AuthError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

// Delete an admin profile
export const deleteAdmin = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await getLoggedInUser(req);
		if (user.role !== 'ADMIN') {
			return res
				.status(403)
				.json({ message: 'Forbidden: Not an admin user' });
		}

		await prisma.admin.delete({
			where: { id: parseInt(id) },
		});
		res.json({ message: 'Admin deleted successfully' });
	} catch (error) {
		if (error instanceof AuthError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
