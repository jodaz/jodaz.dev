import Layout from "@/layouts/main"
import { Grid, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Code, Biceps } from "@/constants/icons"
import seo from 'next-seo.config'

const Projects = () => {
    const { t } = useTranslation('projects')
    const common = useTranslation('common')

    return (
        <>
            <NextSeo {...seo} />
            <Layout>
                <Grid container spacing={2}>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h3" fontWeight={900} gutterBottom>
                            {t('page_title')}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {t('page_description')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='center' display='flex' alignItems='center' justifyContent='center'>
                        <Code size={'2em'} />
                        <Typography variant="subtitle1" ml={2} mr={2}>
                            {common.t('building')}
                        </Typography>
                        <Biceps size={'2em'} />
                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['projects', 'common'])),
    },
  }
}

export default Projects
