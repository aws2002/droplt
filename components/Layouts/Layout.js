import ScrollToTop from "../Tools/ScrollToTop";

import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Head>
        <title>Boka</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      {children}
      <Footer/>
      <ScrollToTop />
    </div>
  );
}