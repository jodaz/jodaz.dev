import Layout from '@/layouts/main'
import Cover from '@/views/Cover'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo';
import Header from '@/components/Header'
import seo from 'next-seo.config';

export default function Home() {
    const { t } = useTranslation('common');

	return (
		<>
            <NextSeo {...seo} />
			<Layout>
                <Header />
				<Cover />
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<any> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common'
        ]))
    }
})
