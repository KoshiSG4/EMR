import { signAccessToken, createRefreshToken } from '../../utils/tokenUtils.js';
import bcrypt from 'bcrypt';
import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

const COOKIE_OPTIONS = (maxAgeMs) => ({
	httpOnly: true,
	sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
	secure: process.env.NODE_ENV === 'production',
	maxAge: maxAgeMs,
	// httpOnly: true,
	// sameSite: 'none',
	// secure: true,
	// maxAge: maxAgeMs,
});

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ message: 'Email and password are required' });
		}

		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(password, user.passwordHash);
		if (!isMatch) {
			return res.status(403).json({ message: 'Invalid credentials' });
		}

		//change password
		if (user.mustChangePassword) {
			return res.status(200).json({
				mustChangePassword: true,
				message: 'You must change your password before continuing',
				user,
			});
		}

		//issue access token
		const accessToken = signAccessToken({
			id: user.id,
			role: user.role,
			email: user.email,
		});

		//create refresh token
		const { raw: refreshRaw, hash: refreshHash } = createRefreshToken();

		//set expirey date  (7 days)
		const expiredAt = new Date(
			Date.now() +
				(process.env.REFRESH_TOKEN_TTL_MS
					? Number(process.env.REFRESH_TOKEN_TTL_MS)
					: 7 * 24 * 60 * 60 * 1000)
		);

		//store hashed refresh token to DB
		await prisma.session.create({
			data: {
				token: refreshHash,
				userId: user.id,
				expiredAt,
			},
		});

		//set cookies
		const accessMaxAge = 15 * 60 * 1000; //15m in ms
		res.cookie('accessToken', accessToken, COOKIE_OPTIONS(accessMaxAge));
		res.cookie(
			'refreshToken',
			refreshRaw,
			COOKIE_OPTIONS(expiredAt.getTime() - Date.now())
		);

		res.json({
			message: 'Logged in',
			accessToken,
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Server error' });
	}
};
