import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Csp, Referrer } from '../client/styles/csp';

interface MyDocumentProps {
  styleTags: Array<React.ReactElement>;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
          <meta httpEquiv="Content-Security-Policy" content={Csp} />
          <meta name="referrer" content={Referrer} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="author"
            content="back-end= Renan Lima e Rodrigo Gonçalves, design= Carla Robles, front-end= Matheus Schiffer"
          />
          <meta name="description" content="Associacao Share Website" />
          <meta name="application-name" content="Share Frontpage" />
          <meta name="keywords" content="SEO" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Associacao Share</title>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Redressed&family=Roboto:wght@100&display=swap"
            rel="stylesheet"
          ></link>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
