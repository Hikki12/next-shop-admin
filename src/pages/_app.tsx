import { MainLayout } from '@/layout/MainLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </>
  );
}

export default MyApp;
