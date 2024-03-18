import Layout from "@/layouts/main"
import { Grid, Stack, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import seo from 'next-seo.config'
import { IProject } from "@/types/models"
import ProjectCard from "@/components/ProjectCard"

const Projects = () => {
    const { t } = useTranslation('projects')
    const common = useTranslation('common')

    const projectsArr: [IProject] = t('projects', { returnObjects: true })

    return (
        <>
            <NextSeo {...seo} />
            <Layout>
                <Stack spacing={2}>
                    <Typography variant="h3" fontWeight={900} gutterBottom>
                        {t('page_title')}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {t('page_description')}
                    </Typography>
                </Stack>
                <Grid
                    container
                    textAlign='center'
                    mt={6}
                >
                    {projectsArr.map((item: IProject, i) => (
                        <ProjectCard key={i} item={item} />
                    ))}
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
