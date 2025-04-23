const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) return res.status(403).json({ message: 'No token provided' });

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.status(401).json({ message: 'Unauthorized' });

		req.user = user;
		next();
	});
};

const authorizedRoles = (...allowedRoles) => {
	return (req, res, next) => {
		if (!allowedRoles.includes(req.user.role)) {
			return res.status(403).json({ message: 'Access Denied' });
		}
		next();
	};
};

module.exports = { authenticateToken, authorizedRoles };
