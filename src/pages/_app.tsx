import type { AppProps } from 'next/app';
import '../client/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Associação Share</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
