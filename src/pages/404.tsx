import NextLink from 'next/link'
import Layout from "@/layouts/main"
import { Link, Stack, Typography } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import seo from 'next-seo.config'

const NotFoundPage = () => {
    const { t } = useTranslation('notfound')

    return (
        <>
            <NextSeo {...seo} />
            <Layout>
                <Stack spacing={2} alignSelf='center'>
                    <Typography variant="subtitle1" fontWeight={900}>
                        {t('not-found')}
                    </Typography>
                    <Link href="/" component={NextLink}>{t('back')}</Link>
                </Stack>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'notfound'])),
    },
  }
}

export default NotFoundPage
