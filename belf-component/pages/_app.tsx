import { AppProps } from "next/app";
import React from "react";
import { wrapper } from "../config/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);