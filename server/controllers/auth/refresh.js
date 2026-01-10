import { PrismaClient } from '../../generated/prisma/index.js';
import {
	createRefreshToken,
	signAccessToken,
	hashToken,
} from '../../utils/tokenUtils.js';
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

export const refreshToken = async (req, res) => {
	try {
		const raw = req.cookies.refreshToken;
		if (!raw)
			return res
				.status(401)
				.json({ message: 'No refresh token provided' });

		const hashed = hashToken(raw);

		const tokenEntry = await prisma.session.findFirst({
			where: {
				token: hashed,
				revoked: false,
				expiredAt: { gt: new Date() },
			},
			include: { user: true },
		});

		if (!tokenEntry)
			return res
				.status(403)
				.json({ message: 'Invalid or expired refresh token' });

		const user = tokenEntry.user;
		const accessToken = signAccessToken({
			id: user.id,
			role: user.role,
			email: user.email,
		});

		const { raw: newRaw, hash: newHash } = createRefreshToken();
		const newExpiresAt = new Date(
			Date.now() +
				(process.env.REFRESH_TOKEN_TTL_MS
					? Number(process.env.REFRESH_TOKEN_TTL_MS)
					: 7 * 24 * 60 * 60 * 1000)
		);

		await prisma.session.create({
			data: {
				userId: user.id,
				token: newHash,
				expiredAt: newExpiresAt,
				revoked: false,
			},
		});

		await prisma.session.update({
			where: { id: tokenEntry.id },
			data: { revoked: true },
		});

		const accessMaxAge = 15 * 60 * 1000; //15m in ms
		res.cookie('accessToken', accessToken, COOKIE_OPTIONS(accessMaxAge));
		res.cookie(
			'refreshToken',
			newRaw,
			COOKIE_OPTIONS(newExpiresAt.getTime() - Date.now())
		);

		res.json({
			message: 'Tokens refreshed',
			user,
			accessToken,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Could not refresh token' });
	}
};
