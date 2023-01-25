import '@/styles/index.scss';
import { SectionContextProvider } from '@/contexts/SectionContext';
import Header from '@/shared/header/Header';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SectionContextProvider>
      <Header />
      <Component {...pageProps} />
    </SectionContextProvider>
  );
}
