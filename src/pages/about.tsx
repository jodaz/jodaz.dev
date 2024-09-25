import Layout from "@/layouts/main"
import { Stack, Grid, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from "next-seo"
import { Avatar } from "@/components/Avatar"
import { IWorkExperience } from "@/types/models"
import seo, { defaultUrl } from "next-seo.config"
import WorkExperience from "@/components/WorkExperience"
import TechStack from "@/components/TechStack"
import SocialMedia from "@/components/SocialMedia"

const About = () => {
    const { t, i18n } = useTranslation('about')

    const workExperiences: [IWorkExperience] = t('experiences', {
        returnObjects: true
    })

    return (
        <>
            <NextSeo
                {...seo}
                title={`${t('page_title')} - Jesus Ordosgoitty`}
                openGraph={{
                    url: `${defaultUrl}${t('page_url')}`,
                    title: t('page_title'),
                    locale: i18n.language
                }}
            />
            <Layout>
                <Grid container spacing={2} mb={3}>
                    <Grid
                        item xs={12} md={5}
                        display='flex'
                        justifyContent={{ xs: 'center', md: 'start' }}
                        sx={{
                            paddingLeft: '5% !important'
                        }}
                    >
                        <Avatar
                            style={{
                                border: '3px solid #0b5ef3',
                                borderRadius: '50%'
                            }}
                            height={250}
                            width={250}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack spacing={2}>
                            <Typography
                                variant="h3"
                                fontWeight={900}
                                gutterBottom
                            >
                                {t('page_title')}
                            </Typography>
                            <Typography
                                fontSize='15px'
                                variant="subtitle1"
                                fontWeight={300}
                                gutterBottom
                                sx={{ whiteSpace: 'pre-line'}}
                            >
                                {t('bio')}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h6"
                            fontWeight={900}
                            gutterBottom
                        >
                            {t('works')}
                        </Typography>
                        <Stack spacing={2}>
                            {workExperiences.map(
                                (item: IWorkExperience, i) => (
                                    <WorkExperience key={i} item={item} />
                                )
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        {/* <Typography variant="h6" fontWeight={900} gutterBottom>
                            {t('skills')}
                        </Typography>
                        <TechStack /> */}
                        <Typography variant="h6" fontWeight={900} gutterBottom>
                            {t('social_media')}
                        </Typography>
                        <Typography fontWeight={400} gutterBottom>
                            {t('social_media_desc')}
                        </Typography>
                        <SocialMedia />
                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'about'])),
    },
  }
}

export default About
