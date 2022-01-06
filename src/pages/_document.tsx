import Document, { Html, Head, Main, NextScript } from 'next/document';

class WrcnDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

          <meta name="robots" content="index,follow" />

          <meta name="theme-color" content="goldenrod" />

          <meta
            name="author"
            content="Apusart • Raszczukowie • Oprogramowanie"
          />
          <meta name="application-name" content="Numido" />

          <link rel="manifest" href="manifest.json" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            // @ts-ignore
            crossOrigin
          />

          <link
            rel="preload"
            as="image"
            href="assets/logo/numido/favicon-64x64.png"
            type="image/png"
            nonce=""
            // @ts-ignore
            onLoad="this.onload=null;this.rel='icon'"
          />
          <link
            rel="icon"
            type="image/png"
            href="assets/logo/numido/favicon-32x32.png"
            sizes="32x32"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="assets/logo/numido/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="assets/logo/numido/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="assets/logo/numido/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="assets/logo/numido/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="assets/logo/numido/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="assets/logo/numido/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="assets/logo/numido/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="assets/logo/numido/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="assets/logo/numido/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="assets/logo/numido/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets/logo/numido/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="assets/logo/numido/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="assets/logo/numido/favicon-16x16.png"
          />

          <meta name="msapplication-TileColor" content="goldenrod" />
          <meta
            name="msapplication-TileImage"
            content="assets/logo/numido/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="goldenrod" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WrcnDocument;
