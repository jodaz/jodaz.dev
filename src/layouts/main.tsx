import { Box } from "@mui/material"
import { LayoutProps } from "@/types"

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
