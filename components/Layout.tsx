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
