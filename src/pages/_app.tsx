import { SectionContextProvider } from '@/contexts/SectionContext';
import '@/styles/index.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SectionContextProvider>
      <Component {...pageProps} />
    </SectionContextProvider>
  );
}
