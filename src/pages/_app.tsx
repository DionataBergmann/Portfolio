import type { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from '@/components/Header';
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      
      <Flex direction="column" mt="120px" bgColor='tertiary.800'> 
        <Component {...pageProps} />
      </Flex>

    </ChakraProvider>
  );
}

export default MyApp;