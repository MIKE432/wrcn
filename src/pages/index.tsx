import type { NextPage } from 'next';
import Head from 'next/head';
import { MainPage } from '../client/mainPage/MainPage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Numido - Studio Numizmatyczne</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Numido - Studio Numizmatyczne - Doradztwo * Pośrednictwo * Sprzedaż * Zakup"
        />
        <meta
          name="keywords"
          content="Doradztwo; Pośrednictwo; Sprzedaż; Zakup"
        />

        <meta property="og:site_name" content="Numido" />
        <meta property="og:title" content="Numido - Studio Numizmatyczne" />
        <meta
          property="og:description"
          content="Numido - Studio Numizmatyczne - Doradztwo * Pośrednictwo * Sprzedaż * Zakup"
        />
        <meta property="og:type" content="%PAGE_TYPE%" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:image" content="/assets/logo/" />
        <meta property="og:url" content="wrcn.pl" />
        <meta property="fb:app_id" content="" />
      </Head>

      <main>
        <MainPage />
      </main>
    </div>
  );
};

export default Home;
