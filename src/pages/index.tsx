// import Layout from '@/layouts/main'
// import Cover from '@/views/Cover'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import seo from 'next-seo.config'
// import Articles from '@/components/Articles'
import ComingSoon from '@/views/ComingSoon'

export default function Home() {
	return (
		<>
			<NextSeo {...seo} />
			<ComingSoon />
		</>
	)
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['commingsoon', 'common']))
	}
})
