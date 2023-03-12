import Layout from '@/layouts/main'
import Cover from '@/views/Cover'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Jesus Ordosgoitty</title>
				<meta name="description" content="Jesus Ordosgoitty - Software Developer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Cover />
			</Layout>
		</>
	)
}
