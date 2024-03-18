import * as React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { ColorModeContext } from '@/providers/ToggleThemeProvider'
import theme from '@/theme'
import { getTheme } from '@/utils/getTheme'
import { appWithTranslation } from 'next-i18next';
import GoogleAnalytics from '@/components/GoogleAnalytics'

function App({ Component, pageProps }: AppProps) {
	const [mode, setMode] = React.useState<'light' | 'dark'>(getTheme());

	const colorMode = React.useMemo(() => ({
		toggleColorMode: () => {
		  	setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
		},
	}), []);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme(mode)}>
                <GoogleAnalytics />
				<Component {...pageProps} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default appWithTranslation(App)
