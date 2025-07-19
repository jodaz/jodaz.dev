/* @ref: https://github.com/garmeeh/next-seo */

const title = 'Jodaz Developments'
const defaultTitle = `${title} - Crafting Solutions`
// const description =
// "Hi fellow Layer 8 mate!, I am Jesus Ordosgoitty, a 98' born guy full-stack software developer mainly using Node, React and Python."
const description =
	'Jodaz Developments provides professional software development services, focusing on scalable, high-quality web and mobile solutions for startups and enterprises. Our expertise covers frontend, backend, and cloud technologies.'
const url = 'https://jodaz.dev'
const ogImageUrl = '/images/og.png'
const keywords =
	'ordosgoitty, jodaz, developments, jesus ordosgoitty, portfolio, javascript, typescript, developer, software engineer, frontend, front-end, venezuela, caribe, fullstack, full-stack, full stack, mobile, react, react native, native'

const seo = {
	titleTemplate: `%s – Jodaz Developments`,
	defaultTitle,
	description,
	openGraph: {
		description,
		title,
		locale: 'en_US',
		type: 'website',
		url,
		canonical: url,
		images: [
			{
				url: ogImageUrl,
				width: 800,
				height: 600,
				alt: title
			}
		]
	},
	additionalMetaTags: [
		{
			name: 'keywords',
			content: keywords
		},
		{
			name: 'theme-color',
			content: '#333333'
		},
		{
			name: 'referer',
			content: 'strict-origin'
		}
	],
	additionalLinkTags: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico?v=3'
		},
		{
			rel: 'shortcut icon',
			type: 'image/x-icon',
			href: '/favicon.ico?v=3'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-16x16.png?v=3',
			sizes: '16x16'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-32x32.png?v=3',
			sizes: '32x32'
		},
		{
			rel: 'apple-touch-icon',
			href: '/apple-touch-icon.png?v=3'
		},
		{
			rel: 'manifest',
			href: '/manifest.json'
		}
	]
}

export { seo as defaultSeo, url as defaultUrl, title as defaultTitle }
export default seo
