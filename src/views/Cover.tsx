import * as React from 'react'
import { Typography, Box, Stack } from "@mui/material";
import { Avatar } from '@/components/Avatar'
import { useTranslation } from 'next-i18next';
import SocialIcons from '@/components/SocialIcons';

const Cover = () => {
    const { t } = useTranslation()

	return (
		<Box sx={{
			width: '100%',
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
                    {t('title')}
				</Typography>
				<Typography
					variant='subtitle1'
					gutterBottom
				>
                    {t('salute')} {t('position')} {t('bio')}
				</Typography>
				<SocialIcons />
			</Stack>
			<Box p={2}>
				<Avatar />
			</Box>
		</Box>
	)
}

export default Cover
