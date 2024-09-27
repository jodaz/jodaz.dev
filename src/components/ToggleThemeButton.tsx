import * as React from 'react';
import { IconButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '@/providers/ToggleThemeProvider';
import { SunIcon, MoonIcon } from '@/constants/icons';

const ToggleThemeButton = () => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
				textTransform: 'capitalize',
			}}
		>
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === 'dark' ? <MoonIcon /> : <SunIcon />}
			</IconButton>
		</Box>
	);
}

export default ToggleThemeButton
