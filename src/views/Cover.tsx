import * as React from 'react'
import { Typography, Box, Stack, Link } from "@mui/material";
import { Avatar } from '@/components/Avatar'
import { useTranslation } from 'next-i18next';
import SocialIcons from '@/components/SocialIcons';
import NextLink from 'next/link';
import { INTERNAL_LINKS } from '@/constants/internal-links';

const Cover = () => {
    const { t } = useTranslation('common')

	return (
		<Box sx={{
			width: { xs: '100%', md: '80%' },
			display: 'flex',
            alignSelf: 'center',
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
                <Stack spacing={2} direction='row'>
                    {INTERNAL_LINKS.map(link => (
                        <Link
                            component={NextLink}
                            href={link.route}
                        >
                            {link.page}
                        </Link>
                    ))}
                </Stack>
			</Stack>
			<Box p={2}>
				<Avatar />
			</Box>
		</Box>
	)
}

export default Cover
