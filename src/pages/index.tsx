import Layout from '@/layouts/main'
import Cover from '@/views/Cover'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo';
import seo from 'next-seo.config';

export default function Home() {
	return (
		<>
            <NextSeo {...seo} />
			<Layout>
				<Cover />
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
