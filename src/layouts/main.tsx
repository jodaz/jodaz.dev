import { Box } from "@mui/material"

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box sx={{
			display: 'flex',
			width: '100%',
			height: '100%',
			justifyContent: 'center'
		}}>
			<Box sx={{
				width: { sm: '100%', lg: '40%' },
				padding: 2
			}}>
				{children}
			</Box>
		</Box>
	)
}

export default Layout
