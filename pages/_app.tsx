import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { SSRProvider } from 'react-bootstrap';
import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import { darkTheme, lightTheme } from '../theme';
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState('light');

  return (
    <Provider store={store}>
      <NextUIProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <SSRProvider>
          <Layout setMode={setMode}>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp
