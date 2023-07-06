import "../styles/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}