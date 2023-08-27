import Layout from "@/layouts/main"
import { Stack, Grid, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from "next-seo"
import { Avatar } from "@/components/Avatar"
import { IWorkExperience } from "@/types/models"
import seo from "next-seo.config"
import WorkExperience from "./components/WorkExperience"

const About = () => {
    const { t } = useTranslation('about')

    const workExperiences: [IWorkExperience] = t('works_array', { returnObjects: true })

    return (
        <>
            <NextSeo {...seo} />
            <Layout>
                <Grid container spacing={2} mb={3}>
                    <Grid
                        item xs={12} md={5}
                        display='flex'
                        justifyContent={{ xs: 'center', md: 'start' }}
                    >
                        <Avatar
                            style={{ borderRadius: '12px' }}
                            height={300}
                            width={300}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack spacing={2}>
                            <Typography variant="h3" fontWeight={900} gutterBottom>
                                {t('page_title')}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight={900} gutterBottom>
                                {t('brief')}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight={900} gutterBottom>
                                {t('bio')}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h6" fontWeight={900} gutterBottom>
                            {t('works')}
                        </Typography>
                        <Stack spacing={2}>
                            {workExperiences.map((item: IWorkExperience, i) => (
                                <WorkExperience index={i} item={item} />
                            ))}
                        </Stack>
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
