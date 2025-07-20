import express from 'express';
import {
	kcAdminClient,
	authenticateKcAdmin,
} from '../keycloak/kcAdminClient.js';
import { PrismaClient, Role } from '../generated/prisma/client.js';
import { getLoggedInUser } from '../utils/getLoggedInUser.js';

const prisma = new PrismaClient();

//Create User Profile (only if user is a SUPER ADMIN)
export const createUser = async (req, res) => {
	try {
		const admin = await getLoggedInUser(req);

		if (admin.role !== 'ADMIN') {
			return res
				.status(404)
				.json({ message: 'Forbidden: Only admins can create users' });
		}

		const { name, email, password, role } = req.body;

		//Auth to Keycloak as service account
		await authenticateKcAdmin();

		//Create a new user in Keycloak
		const keycloakUser = await kcAdminClient.users.create({
			realm: kcAdminClient.realmName,
			username: email,
			email,
			enabled: true,
			credentials: [
				{
					type: 'password',
					value: password,
					temporary: false,
				},
			],
		});

		//Check if user exist in DB
		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return res.status(400).json({ message: 'Email already in use' });
		}

		//Assign realm role
		const allRoles = await kcAdminClient.roles.find();
		const selectedRole = allRoles.find((r) => r.name === role);

		if (!selectedRole) {
			return res
				.status(400)
				.json({ message: `Role ${role} not found in Keycloak` });
		}

		await kcAdminClient.users.addRealmRoleMappings({
			id: keycloakUser.id,
			realm: kcAdminClient.realmName,
			roles: [{ id: selectedRole.id, name: selectedRole.name }],
		});

		//sync to prisma db
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				role: role.toUpperCase(),
			},
		});

		res.status(201).json({
			message: 'User profile created successfully',
			user: newUser,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Failed to create admin profile',
			error: error.message,
		});
	}
};
