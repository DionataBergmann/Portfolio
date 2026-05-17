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
            content="Dionatã Bergmann — Frontend Pleno · React, React Native e TypeScript · ERP corporativo, microfrontends e MBA FIAP em Frontend Engineering."
          />
          <meta
            name="keywords"
            content="TypeScript, React, React Native, NestJS, GraphQL, microfrontends, acessibilidade, Frontend Pleno, Dionatã Bergmann"
          />
          <meta name="author" content="Dionatã Bergmann" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dionatã Bergmann — Frontend Pleno" />
          <meta
            property="og:description"
            content="Desenvolvedor Frontend Pleno · Web e Mobile com React, React Native e TypeScript. ERP corporativo, apps internacionais, microfrontends e integrações REST/GraphQL."
          />
          <meta property="og:image" content="/personalPicture2.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Dionatã Bergmann — Frontend Pleno" />
          <meta
            name="twitter:description"
            content="Desenvolvedor Frontend Pleno · React, React Native, TypeScript, microfrontends e MBA FIAP."
          />
          <meta name="twitter:image" content="/personalPicture2.png" />

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
