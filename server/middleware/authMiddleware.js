import jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';
import dotenv from 'dotenv';

dotenv.config();
const keyCloakIssuer = `${process.env.KEYCLOAK_BASE_URL}/realms/${process.env.KEYCLOAK_REALM}`;
const clientId = `${process.env.KEYCLOAK_CLIENT_ID}`;

const client = new JwksClient({
	jwksUri: `${keyCloakIssuer}/protocol/openid-connect/certs`,
});

function getKey(header, callback) {
	client.getSigningKey(header.kid, (err, key) => {
		if (err) return callback(err);
		const signingKey = key.getPublicKey();
		callback(null, signingKey);
	});
}

export const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) return res.status(401).json({ message: 'No token provided' });

	jwt.verify(
		token,
		getKey,
		{
			audience: clientId,
			issuer: keyCloakIssuer,
		},
		(err, decoded) => {
			if (err) {
				console.error('JWT Error:', err);
				return res.status(403).json({ message: 'Invalid Token' });
			}
			req.user = decoded;
			next();
		}
	);
};
