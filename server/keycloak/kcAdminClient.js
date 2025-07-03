import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const KeycloakAdminClient = require('keycloak-admin').default;

export const kcAdminClient = new KeycloakAdminClient({
	baseUrl: process.env.KEYCLOAK_BASE_URL,
	realmName: process.env.KEYCLOAK_REALM,
});

export const authenticateKcAdmin = async () => {
	await kcAdminClient.auth({
		grantType: 'client-credentials',
		clientId: process.env.KEYCLOAK_CLIENT_ID,
		clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
	});
};
