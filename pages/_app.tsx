import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/reset.css';
import wrapper from '../store/configureStore';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
