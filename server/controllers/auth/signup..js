import bcrypt from 'bcrypt';
import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const signup = async (req, res) => {
	try {
		const { email, password, name, role } = req.body;
		if (!email || !password)
			return res
				.status(400)
				.json({ message: 'email and password required' });

		const existing = await prisma.user.findUnique({ where: { email } });
		if (existing)
			return res.status(409).json({ message: 'User already exists' });

		const hashed = await bcrypt.hash(password, 12);
		const user = await prisma.user.create({
			data: { email, password: hashed, name, role },
			select: { id: true, email: true, role: true, name: true },
		});

		res.status(201).json({ user });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server error' });
	}
};
