import * as React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext } from '@/providers/ToggleThemeProvider'
import theme from '@/theme'
import { getTheme } from '@/utils/getTheme'
import { appWithTranslation } from 'next-i18next';
import GoogleAnalytics from '@/components/GoogleAnalytics'
import NextTopLoader from 'nextjs-toploader';

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
                <CssBaseline />
                <NextTopLoader
                    color="#0b5ef3"
                    initialPosition={0.08}
                    showSpinner={false}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                <GoogleAnalytics />
				<Component {...pageProps} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default appWithTranslation(App)
