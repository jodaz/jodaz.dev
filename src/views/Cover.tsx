import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Cover() {
	return (
		<Box sx={{
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<Stack spacing={2}>
				<Typography
					variant='h1'
					fontSize='2rem'
					gutterBottom
				>
					Hi! I'm Jesus Ordosgoitty
				</Typography>
				<Typography
					variant='h1'
					fontSize='2rem'
					gutterBottom
				>
					Software Developer
				</Typography>
			</Stack>
		</Box>
	)
}