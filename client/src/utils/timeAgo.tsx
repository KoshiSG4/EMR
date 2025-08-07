export const getTimeAgo = (isoTimestamp: string): string => {
	const now = new Date();
	const past = new Date(isoTimestamp);
	const diff = Math.floor((now.getTime() - past.getTime()) / 1000);

	if (diff < 60) return `${diff} sec${diff === 1 ? '' : 's'} ago`;
	if (diff < 3600)
		return `${Math.floor(diff / 60)} min${
			Math.floor(diff / 60) === 1 ? '' : 's'
		} ago`;
	if (diff < 86400)
		return `${Math.floor(diff / 3600)} hour${
			Math.floor(diff / 3600) === 1 ? '' : 's'
		} ago`;

	return `${Math.floor(diff / 86400)} day${
		Math.floor(diff / 86400) === 1 ? '' : 's'
	} ago`;
};
