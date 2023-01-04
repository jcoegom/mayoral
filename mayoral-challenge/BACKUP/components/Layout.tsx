import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>MAYORAL</title>
        <meta name="description" content="Mayoral website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
