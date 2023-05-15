import Layout from '@/layouts/main'
import Cover from '@/views/Cover'
import Head from 'next/head'
import ToggleThemeButton from '@/components/ToggleThemeButton'

export default function Home() {
	return (
		<>
			<Head>
				<title>Jesus Ordosgoitty</title>
				<meta name="description" content="Jesus Ordosgoitty - Software Developer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com"  />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />				
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<ToggleThemeButton />
				<Cover />
			</Layout>
		</>
	)
}
