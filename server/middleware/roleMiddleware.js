export const withRole = (allowedRoles) => {
	return (req, res, next) => {
		const userRoles = req.user?.realm_access?.roles || [];

		const hasAccess = allowedRoles.some((role) => userRoles.includes(role));

		if (!hasAccess) {
			return res
				.status(403)
				.json({ message: 'Forbidden: Insufficient role' });
		}
		next();
	};
};
