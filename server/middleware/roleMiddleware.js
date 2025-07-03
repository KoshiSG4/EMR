const { keycloak } = require('../routes/keycloak');

const requireRoles = (...roles) => {
	const roleString = roles.map((role) => `realm:${role}`).join(' ');
	return keycloak.protect(roleString);
};

module.exports = { requireRoles };
