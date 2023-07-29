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
			{/* <Head>
                <NextSeo {...seo} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com"  />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
			</Head> */}
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
