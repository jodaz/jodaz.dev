import { Box } from "@mui/material"

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

	return (
		<>
			<Box sx={{
				display: 'flex',
				width: '100%',
				height: '100%'
			}}>
				{children}
			</Box>
		</>
	)
}

export default Layout
