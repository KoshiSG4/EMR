import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</Router>
	);
};

export default App;
