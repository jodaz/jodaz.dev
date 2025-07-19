import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const ComingSoon = () => (
	<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' minHeight='100vh' py={10}>
		<Typography variant='h1' component='h1' gutterBottom color='info.main' fontWeight={700}>
			Under Construction
		</Typography>
		<Typography variant='h5' color='textSecondary' align='center' maxWidth={600} mb={3}>
			Welcome to my digital workspace. This site is currently undergoing a transformation to bring you a more
			refined and engaging experience.
		</Typography>
		<Typography variant='body1' color='textSecondary' align='center' maxWidth={400}>
			Please pardon the dust as I craft new features, polish the design, and prepare exciting content. Feel free
			to explore, and check back soon for updates!
		</Typography>
		<Box mt={4}>
			<Typography variant='caption' color='textSecondary'>
				— Thank you for your patience and curiosity —
			</Typography>
			<Box mt={2}>
				<Link href='https://x.com/jodaz_' color='info' target='_blank' passHref>
					<Typography component='a' color='info.main' fontWeight={500}>
						{'jodaz_'}
					</Typography>
				</Link>
			</Box>
		</Box>
	</Box>
)

export default ComingSoon
