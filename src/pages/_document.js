import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang='nl'>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NF3H9WEFS9"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-NF3H9WEFS9');`
        }}
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
