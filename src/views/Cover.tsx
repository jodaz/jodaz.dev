import * as React from 'react'
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Avatar } from '@/components/Avatar';

const Cover = () => (
	<Box sx={{
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<Stack spacing={2}>
			<Typography
				variant='subtitle1'
				fontWeight={700}
				gutterBottom
			>
				Jesus Ordosgoitty
			</Typography>
			<Typography
				variant='subtitle1'
				gutterBottom
			>
				Software Developer
			</Typography>
			<Avatar />
		</Stack>
	</Box>
)

export default Cover