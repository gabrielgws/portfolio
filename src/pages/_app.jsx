import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { GlobalStyle } from "../styles/global";
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  )
}

export default MyApp
