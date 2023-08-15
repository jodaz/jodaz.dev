import Layout from "@/layouts/main"
import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from "next-seo"
import seo from "next-seo.config"
import { Avatar } from "@/components/Avatar"

const About = () => {
    const { t } = useTranslation('about')

    return (
        <>
            <NextSeo {...seo} />
            <Layout>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} display='flex' justifyContent='center'>
                        <Avatar style={{ borderRadius: '12px' }} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h3" fontWeight={900} gutterBottom>
                            {t('page_title')}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={900} gutterBottom>
                            {t('brief')}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={900} gutterBottom>
                            {t('bio')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h6" fontWeight={900}>
                            {t('works')}
                        </Typography>
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
