import { Box } from "@mui/material"
import { LayoutProps } from "@/types"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
        <Box sx={{
            background: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            height: 'fit-content',
            color: 'text.primary',
            backgroundColor: theme => theme.palette.background.default
        }}>
            <Header />
            <Box sx={{
                display: 'flex',
                width: '100%',
                minHeight: { xs: '84vh', md: '80vh' },
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0 2rem'
            }}>
                {children}
            </Box>
            <Footer />
        </Box>
	)
}

export default Layout
