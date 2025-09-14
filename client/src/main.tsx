import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App.js';
import keycloak from './keycloak.js';
import './index.css';

keycloak
	.init({
		onLoad: 'login-required',
		checkLoginIframe: false,
		redirectUri: window.location.origin,
	})
	.then((authenticated) => {
		if (authenticated) {
			ReactDOM.createRoot(document.getElementById('root')!).render(
				<React.StrictMode>
					<Provider store={store}>
						<App />
					</Provider>
				</React.StrictMode>
			);
		} else {
			keycloak.login();
		}
	});

//refresh token automatically
setInterval(() => {
	keycloak
		.updateToken(60)
		.then((refreshed) => {
			if (refreshed) {
				console.log('Token Refreshed');
			}
		})
		.catch(() => keycloak.login());
}, 1000);
