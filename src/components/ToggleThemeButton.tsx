import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
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
				position: 'absolute',
				top: 0,
				right: 0,
				p: 1
			}}
		>
			{theme.palette.mode}
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === 'dark' ? <MoonIcon /> : <SunIcon />}
			</IconButton>
		</Box>
	);
}

export default ToggleThemeButton

