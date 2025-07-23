import { Box, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const ComingSoon = () => {
	const { t } = useTranslation('comingsoon')
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			minHeight='100vh'
			py={10}
		>
			<Typography variant='h1' component='h1' gutterBottom color='info.main' fontWeight={700}>
				{t('title', 'Under Construction')}
			</Typography>
			<Typography variant='h5' color='textSecondary' align='center' maxWidth={600} mb={3}>
				{t(
					'subtitle',
					'Welcome to our digital workspace. This site is currently undergoing a transformation to bring you a more refined and engaging experience.'
				)}
			</Typography>
			<Typography variant='body1' color='textSecondary' align='center' maxWidth={400}>
				{t(
					'body',
					'Please pardon the dust as we craft new features, polish the design, and prepare exciting content. Feel free to explore, and check back soon for updates!'
				)}
			</Typography>
			<Box mt={4}>
				<Typography variant='caption' color='textSecondary'>
					{t('thanks', '— Thank you for your patience and curiosity —')}
				</Typography>
				<Box mt={2}>
					<MuiLink
						color='info.main'
						component={Link}
						href='https://instagram.com/jodaz.dev'
						target='_blank'
						underline='hover'
						sx={{ fontWeight: 500, textDecoration: 'none', fontFamily: 'Edo', fontSize: '2rem' }}
					>
						jodaz_
					</MuiLink>
				</Box>
			</Box>
		</Box>
	)
}

export default ComingSoon
