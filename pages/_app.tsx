import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/reset.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
