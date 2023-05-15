import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { ToggleThemeProvider } from '@/providers/ToggleThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<ToggleThemeProvider>
				<Component {...pageProps} />
			</ToggleThemeProvider>
		</ThemeProvider>
	)
}
