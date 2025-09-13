import React from 'react';

const Forbidden = () => {
	return (
		<div className="bg-red-100  text-red-800 p-4 rounded">
			<h2 className="text-xl font-bold">403 - Forbidden</h2>
			<p>You are not authorized to access this section.</p>
		</div>
	);
};

export default Forbidden;
