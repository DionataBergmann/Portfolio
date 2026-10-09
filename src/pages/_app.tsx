import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import theme from "../theme/theme";
import CookiePopup from '@/components/CookiePopup';
import { Analytics } from '@vercel/analytics/react';
import { initFirebaseAnalytics } from '@/lib/firebase';
import "../common/internationalization/i18n";

function SeoHead() {
  const { t } = useTranslation();
  const title = t('meta.title');
  const description = t('meta.description');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
    </Head>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFirebaseAnalytics();
  }, []);

  return (
    <ChakraProvider theme={theme} >
      <SeoHead />
      <Header />
      
      <Flex direction="column" mt="120px" bgColor='tertiary.800' width="100%" overflowX="hidden"> 
        <Component {...pageProps} />
      </Flex>

     <CookiePopup />

     <Analytics /> 
    </ChakraProvider>
  );
}

export default MyApp;
