import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import React from "react";
import Layout from "../components/layout";
import { wrapper } from "../config/store";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);