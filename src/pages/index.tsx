import Layout from '@/layouts/main'
import Cover from '@/views/Cover'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo';
import seo from 'next-seo.config';
import Articles from '@/components/Articles';
import { Stack } from '@mui/material';

export default function Home() {
	return (
		<>
            <NextSeo {...seo} />
			<Layout>
                <Cover />
                <Articles />
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common'
        ]))
    }
})
