import Layout from "@/layouts/main"
import { Grid, Stack, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import seo, { defaultUrl } from 'next-seo.config'
import { IProject } from "@/types/models"
import ProjectCard from "@/components/ProjectCard"

const Projects = () => {
    const { t, i18n } = useTranslation('projects')
    const common = useTranslation('common')

    const projectsArr = t('projects', { returnObjects: true }) as [IProject];

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
                    {projectsArr.filter((item: IProject) => item.hidden === false)
                        .map((item: IProject, i) => (
                            <ProjectCard
                                key={i}
                                item={item}
                                t={t}
                            />
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
