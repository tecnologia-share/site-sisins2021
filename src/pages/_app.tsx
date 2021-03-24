import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Head from '../components/Head';
import Layout from '../components/Layout';

import '../styles/globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head title="Associação Share" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
