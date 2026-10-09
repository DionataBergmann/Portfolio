import type { AppProps } from 'next/app';
import { useEffect, useLayoutEffect } from 'react';
import Head from 'next/head';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import theme from "../theme/theme";
import CookiePopup from '@/components/CookiePopup';
import { Analytics } from '@vercel/analytics/react';
import { initFirebaseAnalytics } from '@/lib/firebase';
import i18n, { resolvePreferredLanguage } from "../common/internationalization/i18n";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function SeoHead() {
  const { t } = useTranslation();
  const title = t('meta.title');
  const description = t('meta.description');

  useEffect(() => {
    document.title = title;
    const metas: Array<[string, string]> = [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
    ];
    metas.forEach(([selector, content]) => {
      document.head.querySelector(selector)?.setAttribute('content', content);
    });
  }, [title, description]);

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
  useIsoLayoutEffect(() => {
    const lang = resolvePreferredLanguage();
    document.documentElement.lang = lang;
    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang);
    }
  }, []);

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
