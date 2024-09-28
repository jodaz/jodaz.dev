/**
 * Get theme mode based on user current time or localStorage preference
 * @returns 'light' | 'dark'
 */
export const getTheme = (): 'light' | 'dark' => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      // Retrieve theme from localStorage
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme as 'light' | 'dark'; // Return the stored theme if it exists
      }
    }

    // Fallback to time-based theme
    const now = new Date();
    const hour = now.getHours();

    return (hour > 6 && hour < 18) ? 'light' : 'dark';
};

  // Function to set the theme in localStorage
export const setTheme = (theme: 'light' | 'dark'): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
};
