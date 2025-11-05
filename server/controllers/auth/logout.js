import { PrismaClient } from '../../generated/prisma/index.js';
import { hashToken } from '../../utils/tokenUtils.js';
const prisma = new PrismaClient();

const COOKIE_CLEAR_OPTS = {
	// httpOnly: true,
	// sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
	// secure: process.env.NODE_ENV === 'production',
	// maxAge: 0,
	httpOnly: true,
	sameSite: 'none',
	secure: true,
	maxAge: 0,
};

export const logout = async (req, res) => {
	try {
		const raw = req.cookies.refreshToken;
		if (raw) {
			const hashed = hashToken(raw);

			await prisma.session.updateMany({
				where: { token: hashed },
				data: { revoked: true },
			});
		}

		// clear cookies
		res.cookie('accessToken', '', COOKIE_CLEAR_OPTS);
		res.cookie('refreshToken', '', COOKIE_CLEAR_OPTS);

		res.json({ message: 'Logged out' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Failed to logout' });
	}
};
