const SystemHealthStatus = () => {
	const status = {
		uptime: '99.99%',
		apiLatency: '180ms',
		memoryUsage: '68%',
	};

	return (
		<div className="border-2 border-[#C3C6C3] rounded-2xl shadow-md p-4">
			<h3 className="text-lg font-semibold mb-2">System Health</h3>
			<ul className="text-sm text-gray-700 space-y-1">
				<li>✅ Uptime: {status.uptime}</li>
				<li>⚡ API Latency: {status.apiLatency}</li>
				<li>🧠 Memory Usage: {status.memoryUsage}</li>
			</ul>
		</div>
	);
};

export default SystemHealthStatus;
