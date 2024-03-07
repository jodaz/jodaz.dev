import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config.js'

export default function Document(props: any) {
    const currentLocale =
      props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale

    return (
        <Html lang={currentLocale}>
          <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-B0Q9QLJ4ES"
                />
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-B0Q9QLJ4ES');
                    `}
                </script>
           </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
}
