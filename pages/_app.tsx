import { AppProps } from 'next/app';
import { Grommet } from 'grommet';
//component
import { Layout } from "../components/shared/layout"
//style
import { GlobalStyle } from "../styles/global"
import { customTheme } from "../styles/styles"

const isProduction = process.env.NODE_ENV === "production";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <GlobalStyle />
      <Grommet plain theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Grommet>
    </>
  );
};

export default MyApp;