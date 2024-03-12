import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config.js'
import Script from "next/script";

export default function Document(props: any) {
    const currentLocale =
      props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale

    return (
        <Html lang={currentLocale}>
          <Head>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-B0Q9QLJ4ES`}
            />
            <Script strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-B0Q9QLJ4ES', {
                        page_path: window.location.pathname,
                      });
                    `,
                }}
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
}
