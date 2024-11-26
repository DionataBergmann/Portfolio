import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Portfólio de desenvolvedor web e mobile com experiência em React, NextJs, React Native."
          />
          <meta
            name="keywords"
            content="React, React Native, Desenvolvedor, Portfólio, Web, Mobile, Frontend, Front end"
          />
          <meta name="author" content="Dionatã Bergmann" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta property="og:title" content="Portfólio de Desenvolvedor Web e Mobile" />
          <meta
            property="og:description"
            content="Portfólio de desenvolvedor com experiência em React, Next.js e React Native."
          />

          <link rel="icon" href="/favicon.ico" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
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
    );
  }
}

export default MyDocument;
