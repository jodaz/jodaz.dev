import * as React from 'react'
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Avatar } from '@/components/Avatar';
import SocialIcons from '@/components/SocialIcons';

const Cover = () => (
	<Box sx={{
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: { xs: 'column', sm: 'column', lg: 'row' }
	}}>
		<Stack
			spacing={2}
			mb={2}
			p={2}
		>
			<Typography
				variant='h6'
				fontWeight={700}
				gutterBottom
			>
				Jesus Ordosgoitty
			</Typography>
			<Typography
				variant='subtitle1'
				gutterBottom
			>
				Hi!, I&apos;m a <strong>Frontend Developer</strong> with 5+ years of experience as a <strong>Web Developer </strong>
			 	working with ReactJS, NodeJS, and Laravel. Experienced in agile teams, debugging, and optimizing web applications. 
			</Typography>
			<SocialIcons />
		</Stack>
		<Box p={2}>
			<Avatar />
		</Box>
	</Box>
)

export default Cover