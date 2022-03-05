/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SocketsProvider from '../context/socketContext';

interface AppParams {
  Component: any,
  pageProps: any,
}

function MyApp({ Component, pageProps }: AppParams) {
  return (
    <SocketsProvider>
      <Component {...pageProps} />
    </SocketsProvider>
  );
}

export default MyApp;
