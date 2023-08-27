import * as React from 'react'
import { Typography, Box, Stack, styled } from "@mui/material";
import { Avatar } from '@/components/Avatar'
import { useTranslation } from 'next-i18next';
import SocialIcons from '@/components/SocialIcons';
import Navigation from '@/components/Navigation';

const Name = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: (theme.palette.mode == 'dark')
        ? theme.palette.info.light
        : theme.palette.info.main
}));

const Cover = () => {
    const { t } = useTranslation('common')

	return (
		<Box sx={{
			display: 'flex',
            alignSelf: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: { xs: 'column', sm: 'column', lg: 'row' }
		}}>
			<Stack
				spacing={3}
				mb={2}
				p={2}
			>
				<Name
					variant='h4'
					fontWeight={900}
					gutterBottom
				>
                    {t('title')}
				</Name>
				<Typography
					variant='subtitle1'
					gutterBottom
				>
                    {t('salute')} {t('position')} {t('bio')}
				</Typography>
				<SocialIcons />
                <Navigation />
			</Stack>
			<Box p={2}>
				<Avatar />
			</Box>
		</Box>
	)
}

export default Cover
