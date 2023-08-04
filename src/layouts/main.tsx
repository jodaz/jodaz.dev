import { Box, Container } from "@mui/material"
import { Footer } from "@/components/Footer"
import { LayoutProps } from "@/types"
import { Header } from "@/components/Header"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
        <Container>
            <Header />
            <Box sx={{
                display: 'flex',
                width: '100%',
                minHeight: { sm: '84vh', md: '80vh' },
                justifyContent: 'center',
                color: 'text.primary',
                backgroundColor: theme => theme.palette.background.default
            }}>
                {children}
            </Box>
            <Footer />
        </Container>
	)
}

export default Layout
