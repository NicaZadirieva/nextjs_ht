export function daysBetweenNow(startDate: Date) {
	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	return Math.round((Date.now() - startDate.getMilliseconds()) / millisecondsPerDay);
}