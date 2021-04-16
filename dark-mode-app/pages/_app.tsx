import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Theme from "../components/Theme";
const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <RecoilRoot>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </RecoilRoot>
    </>
  );
};

export default MyApp;