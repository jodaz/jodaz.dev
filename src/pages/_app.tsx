import * as React from 'react'
import '@/styles/globals.css'
import NextApp from 'next/app'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext } from '@/providers/ToggleThemeProvider'
import theme from '@/theme'
import { getTheme, setTheme } from '@/utils/getTheme'
import { appWithTranslation } from 'next-i18next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import NextTopLoader from 'nextjs-toploader'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/utils/apollo-client'
import parser from 'ua-parser-js'
import Home from '@/pages/index'

interface IAppProps extends AppProps {
	deviceType: string
}

function App({ Component, pageProps, deviceType }: IAppProps) {
	const [mode, setMode] = React.useState<'light' | 'dark'>(getTheme())

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => {
					const newMode = prevMode === 'light' ? 'dark' : 'light'

					setTheme(newMode)
					return newMode
				})
			}
		}),
		[]
	)

	return (
		<ApolloProvider client={apolloClient}>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme(mode, deviceType)}>
					<CssBaseline />
					<NextTopLoader
						color='#0b5ef3'
						initialPosition={0.08}
						showSpinner={false}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>
					<GoogleAnalytics />
					<Home />
					{/* <ComingSoon /> */}
					{/* <Component {...pageProps} /> */}
				</ThemeProvider>
			</ColorModeContext.Provider>
		</ApolloProvider>
	)
}

App.getInitialProps = async (context: any) => {
	let deviceType

	if (context.ctx.req) {
		deviceType = parser(context.ctx.req.headers['user-agent']).device.type || 'desktop'
	}

	return {
		...NextApp.getInitialProps(context),
		deviceType
	}
}

export default appWithTranslation(App)
