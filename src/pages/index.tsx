import Layout from '@/layouts/main'
import Cover from '@/views/Cover'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next'
import Header from '@/components/Header'

export default function Home() {
    const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>{t('app_title')}</title>
				<meta name="description" content="Jesus Ordosgoitty - Software Developer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com"  />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
