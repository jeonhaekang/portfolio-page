import '@/styles/index.scss';
import { SectionContextProvider } from '@/contexts/SectionContext';
import Header from '@/shared/header/Header';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>전해강 | 포트폴리오</title>
        <meta name="description" content="주니어 프론트엔드 개발자 전해강 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionContextProvider>
        <Header />
        <Component {...pageProps} />
      </SectionContextProvider>
    </>
  );
}
