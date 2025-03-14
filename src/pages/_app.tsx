import type { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from '@/components/Header';
import theme from "../theme/theme";
import CookiePopup from '@/components/CookiePopup';
import { Analytics } from '@vercel/analytics/react'; 
import "../common/internationalization/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
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
