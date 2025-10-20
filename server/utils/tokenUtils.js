import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

const ACCESS_EXP = process.env.ACCESS_TOKEN_EXP || '15m';
const REFRESH_EXP = process.env.REFRESH_TOKEN_EXP || '7d';

export function signAccessToken(payload) {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: ACCESS_EXP });
}

export function verifyAccessToken(token) {
	return jwt.verify(token, process.env.JWT_SECRET);
}

// create a secure random refresh token (raw), and hashed string for DB storage
export function createRefreshToken() {
	console.log('first');
	const raw = crypto.randomBytes(64).toString('hex'); // raw token (returned to client via cookie)
	const hash = crypto.createHash('sha256').update(raw).digest('hex');
	console.log('raw&hash', raw, hash);
	return { raw, hash };
}

// helper to verify raw token matches DB hash
export function hashToken(tokenRaw) {
	return crypto.createHash('sha256').update(tokenRaw).digest('hex');
}
