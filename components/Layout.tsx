import React, { ReactNode, useState } from "react";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children?: ReactNode;
  title?: string;
  lastUpdated: string;
}

const Layout = ({ children, title = "Covistats", lastUpdated }: Props) => {
  const [selected, setSelected] = useState<string>("home");
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link
          rel="shortcut icon"
          href="https://www.flaticon.com/svg/vstatic/svg/2913/2913604.svg?token=exp=1619604113~hmac=3bf5dc8bce3a3f9019be62f75f5b2256"
          type="image/x-icon"
        />
      </Head>
      <Header
        lastUpdated={lastUpdated}
        selected={selected}
        setSelected={setSelected}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
