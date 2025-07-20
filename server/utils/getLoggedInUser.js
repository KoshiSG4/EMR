import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getLoggedInUser = async (req, res) => {
	try {
		const email = req.user?.email;

		if (!email) {
			return res.status(404).json({ message: 'Email not found' });
		}

		const user = await prisma.user.findUnique({ where: { email } });

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		return res.status(200).json(user);
	} catch (err) {
		console.error(err);
		res.status(500).json({ messag: 'Internal Server Error' });
	}
};
