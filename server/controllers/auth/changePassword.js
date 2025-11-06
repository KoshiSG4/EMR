import bcrypt from 'bcryptjs';
import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const changePassword = async (req, res) => {
	try {
		const { email, password } = req.body;

		const hashed = await bcrypt.hash(password, 10);

		await prisma.user.update({
			where: { email },
			data: {
				passwordHash: hashed,
				mustChangePassword: false,
			},
		});

		res.status(200).json({ message: 'Password Updated Successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Server Error',
			error: error.message,
		});
	}
};
