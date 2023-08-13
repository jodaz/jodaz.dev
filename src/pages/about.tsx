import Layout from "@/layouts/main"
import { Stack, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from "next-seo"
import seo from "next-seo.config"

const About = () => {
    const { t } = useTranslation('about')

    return (
        <>
            <NextSeo {...seo} />
            <Layout>
                <Stack spacing={2} alignSelf='center'>
                    <Typography variant="h6" fontWeight={900}>
                        {t('page_title')}
                    </Typography>
                </Stack>
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
