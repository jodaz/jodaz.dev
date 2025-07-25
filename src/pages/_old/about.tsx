import Layout from '@/layouts/main'
import { Stack, Typography, Box, useMediaQuery, Theme } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Avatar } from '@/components/Avatar'
import { IWorkExperience } from '@/types/models'
import seo, { defaultUrl } from 'next-seo.config'
import WorkExperience from '@/components/WorkExperience'
import SocialMedia from '@/components/SocialMedia'
import { Available } from '@/components/Available'

const About = () => {
	const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	const { t, i18n } = useTranslation('about')

	const workExperiences = t('experiences', {
		returnObjects: true
	}) as IWorkExperience[]

	return (
		<>
			<NextSeo
				{...seo}
				title={`${t('page_title')}`}
				openGraph={{
					url: `${defaultUrl}${t('page_url')}`,
					title: t('page_title'),
					locale: i18n.language
				}}
			/>
			{/* <Layout>
				<Box display={{ xs: 'none', md: 'flex' }} justifyContent='flex-end' flex={1} marginRight='3rem'>
					<Available />
				</Box>
				<Grid container spacing={2} mb={3}>
					<Grid
						item
						xs={12}
						md={5}
						display='flex'
						justifyContent={{ xs: 'center', sm: 'center', md: 'start' }}
						sx={{
							paddingLeft: '5% !important',
							flexDirection: { xs: 'column', md: 'row' },
							alignItems: 'center'
						}}
					>
						<Avatar
							style={{
								border: '3px solid #0b5ef3',
								borderRadius: '50%',
								marginBottom: '25px'
							}}
							height={250}
							width={250}
						/>
						{isSmall ? <Available /> : null}
					</Grid>
					<Grid item xs={12} md={7}>
						<Stack spacing={2}>
							<Typography variant='h3' fontWeight={900} gutterBottom>
								{t('page_title')}
							</Typography>
							<Typography
								fontSize='15px'
								variant='subtitle1'
								fontWeight={300}
								gutterBottom
								sx={{ whiteSpace: 'pre-line' }}
							>
								{t('bio')}
							</Typography>
						</Stack>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={12} md={5}>
						<Typography variant='h6' fontWeight={900} gutterBottom>
							{t('works')}
						</Typography>
						<Stack spacing={2}>
							{workExperiences.map((item: IWorkExperience, i) => (
								<WorkExperience key={i} item={item} />
							))}
						</Stack>
					</Grid>
					<Grid item xs={12} md={7}>
						 <Typography variant="h6" fontWeight={900} gutterBottom>
							{t('skills')}
						</Typography>
						<TechStack />
						<Typography variant='h6' fontWeight={900} gutterBottom>
							{t('social_media')}
						</Typography>
						<Typography fontWeight={400} gutterBottom>
							{t('social_media_desc')}
						</Typography>
						<SocialMedia />
					</Grid>
				</Grid>
			</Layout>  */}
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', ['common', 'about']))
		}
	}
}

export default About
