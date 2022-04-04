import { AppProps } from 'next/app';
//component
import { Layout } from "../components/shared/layout"

const isProduction = process.env.NODE_ENV === "production";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;