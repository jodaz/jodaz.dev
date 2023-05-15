/**
 * Get theme mode based on user current time
 * @returns 'light' | 'dark'
 */
export const getTheme = () => {
	const now = new Date();
	const hour = now.getHours()

	return (hour > 6 && hour < 18) ? 'light' : 'dark'
}