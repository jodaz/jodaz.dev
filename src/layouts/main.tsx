import { Box } from "@mui/material"
import { LayoutProps } from "@/types"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
        <Box sx={{
            color: 'text.primary',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme => theme.palette.background.default,
            height: '100vh',
        }}>
            <Header />
            <Box sx={{
                display: 'flex',
                alignSelf: 'center',
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'background.default',
                backgroundColor: theme => theme.palette.background.default,
                padding: '100px 10%'
            }}>
                {children}
            </Box>
            <Footer />
        </Box>
	)
}

export default Layout
